const READ_BUDGET_MS = 15_000;
const MAX_ATTEMPTS = 3;
const MAX_PAGES = 100;
const DEFAULT_PAGE_SIZE = 25;

interface ReadOptions {
  headers?: HeadersInit;
  timeoutMs?: number;
  retryDelayMs?: number;
}

interface JsonRead {
  ok: boolean;
  status: number;
  json: unknown;
}

function timeoutError(): DOMException {
  return new DOMException('The public role request timed out.', 'TimeoutError');
}

function readBudget(value: number | undefined): number {
  return Number.isFinite(value) ? Math.min(READ_BUDGET_MS, Math.max(1, value!)) : READ_BUDGET_MS;
}

/** Include response-body reading in the deadline, not only response headers. */
function abortable<T>(operation: Promise<T>, signal: AbortSignal): Promise<T> {
  if (signal.aborted) return Promise.reject(signal.reason);
  return new Promise((resolve, reject) => {
    const aborted = () => reject(signal.reason);
    signal.addEventListener('abort', aborted, { once: true });
    operation.then(resolve, reject).finally(() => signal.removeEventListener('abort', aborted));
  });
}

function wait(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const aborted = () => { clearTimeout(timer); reject(signal.reason); };
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', aborted);
      resolve();
    }, ms);
    if (signal.aborted) aborted();
    else signal.addEventListener('abort', aborted, { once: true });
  });
}

function retryAfterMs(value: string): number | null {
  if (/^\d+$/.test(value.trim())) return Number(value.trim()) * 1000;
  // HTTP dates start with a weekday; Date.parse alone also accepts numeric
  // strings such as "1.5", which are not valid Retry-After delays or dates.
  if (!/^[A-Za-z]{3,9}(?:,| )/.test(value.trim())) return null;
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.max(0, date - Date.now()) : null;
}

/** Bounded retries apply only to public GETs. Application POSTs never use this. */
export async function readPublicRoleJson(url: string, options: ReadOptions = {}): Promise<JsonRead> {
  const budget = readBudget(options.timeoutMs);
  const deadline = performance.now() + budget;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(timeoutError()), budget);
  const retryDelay = Number.isFinite(options.retryDelayMs) ? Math.max(0, options.retryDelayMs!) : 250;
  try {
    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      controller.signal.throwIfAborted();
      if (performance.now() >= deadline) throw timeoutError();
      let response: Response;
      try {
        response = await abortable(fetch(url, {
          method: 'GET', headers: options.headers, signal: controller.signal,
        }), controller.signal);
      } catch (error) {
        controller.signal.throwIfAborted();
        const delay = retryDelay * 2 ** attempt;
        if (attempt === MAX_ATTEMPTS - 1 || (error as Error)?.name === 'AbortError' || delay >= deadline - performance.now()) throw error;
        await wait(delay, controller.signal);
        continue;
      }

      if (response.ok) {
        // A malformed body is not an empty feed and is not retried as a network error.
        const json = await abortable(response.json(), controller.signal);
        if (performance.now() >= deadline) throw timeoutError();
        return { ok: true, status: response.status, json };
      }
      const transient = response.status === 429 || response.status >= 500 && response.status <= 599;
      if (!transient || attempt === MAX_ATTEMPTS - 1) return { ok: false, status: response.status, json: null };
      const retryAfter = response.headers.get('Retry-After');
      const delay = retryAfter !== null ? retryAfterMs(retryAfter)
        : response.status === 429 ? null : retryDelay * 2 ** attempt;
      if (delay === null || delay >= deadline - performance.now()) {
        return { ok: false, status: response.status, json: null };
      }
      // Release an unread error body before making another safe GET.
      void response.body?.cancel().catch(() => undefined);
      await wait(delay, controller.signal);
    }
    throw new Error('The public role request did not complete.');
  } finally {
    clearTimeout(timer);
  }
}

/** Read every list page within one budget; incomplete feeds must never look empty. */
export async function readPublicRolePages<T extends { slug: string }>(url: string, options: ReadOptions = {}): Promise<T[]> {
  const deadline = performance.now() + readBudget(options.timeoutMs);
  const roles = new Map<string, T>();
  let offset = 0;
  let limit = DEFAULT_PAGE_SIZE;
  let expectedTotal: number | undefined;
  for (let page = 0; page < MAX_PAGES; page++) {
    const remaining = deadline - performance.now();
    if (remaining <= 0) throw timeoutError();
    const pageUrl = new URL(url);
    if (page > 0) {
      pageUrl.searchParams.set('limit', String(limit));
      pageUrl.searchParams.set('offset', String(offset));
    }
    const response = await readPublicRoleJson(pageUrl.href, { ...options, timeoutMs: remaining });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const body = response.json as { data?: unknown; meta?: unknown } | null;
    if (!Array.isArray(body?.data)) throw new Error('Malformed roles response');
    const rows = body.data;
    if (rows.some((role) => !role || typeof role !== 'object' || typeof role.slug !== 'string' || !role.slug.trim())) {
      throw new Error('Malformed roles response');
    }
    const previousCount = roles.size;
    rows.forEach((role) => roles.set(role.slug, role as T));
    const meta = body.meta as { total?: unknown; limit?: unknown; offset?: unknown } | null | undefined;
    if (meta != null && (typeof meta !== 'object' || Array.isArray(meta))) throw new Error('Malformed roles response metadata');
    const hasPagination = meta && ['total', 'limit', 'offset'].some((key) => key in meta);
    if (hasPagination) {
      const total = meta.total as number;
      const pageLimit = meta.limit as number;
      const pageOffset = meta.offset as number;
      if (!Number.isSafeInteger(total) || total < 0 || !Number.isSafeInteger(pageLimit) || pageLimit < 1 || pageLimit > 100
        || pageOffset !== offset || rows.length > pageLimit || offset + rows.length > total) {
        throw new Error('Malformed roles response metadata');
      }
      if (expectedTotal !== undefined && total !== expectedTotal) throw new Error('The roles list changed while loading. Please try again.');
      expectedTotal = total;
      limit = pageLimit;
      offset += rows.length;
      if (offset === total) {
        if (roles.size !== total) throw new Error('Incomplete roles response');
        return [...roles.values()];
      }
      if (rows.length === 0 || roles.size === previousCount) throw new Error('Incomplete roles response');
    } else {
      // Older valid envelopes may omit optional meta. Continue full default-size
      // pages instead of silently assuming the first 25 roles are the whole feed.
      if (expectedTotal !== undefined) throw new Error('Incomplete roles response metadata');
      if (rows.length < limit) return [...roles.values()];
      if (roles.size === previousCount) throw new Error('Incomplete roles response');
      offset += rows.length;
    }
  }
  throw new Error('The roles feed exceeded its safe pagination limit.');
}
