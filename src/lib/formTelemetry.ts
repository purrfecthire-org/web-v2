/**
 * Funnel telemetry and a retry queue for the public OA forms.
 *
 * ## Why this exists
 *
 * Today, if a submission fails, the lead is simply gone and nobody finds out:
 * the CRM shows nothing, and "nothing" looks exactly like a quiet day. The only
 * way to tell "nobody applied" from "everybody applied and it broke" is to count
 * the attempts on the client, where the click actually happens, and reconcile
 * that against what the backend stored.
 *
 * ## What this can and cannot see
 *
 * These events share a fate with the submission they describe. If the browser
 * cannot reach the backend at all — outage, an origin missing from the CORS
 * allowlist, a wrong `PUBLIC_API_ENDPOINT` baked into the build — then the
 * beacons die with the submission and the dashboard reads `0 attempts, 0 leads`,
 * which is indistinguishable from no traffic. **Attempt counts are a floor, not
 * a truth.** The external canary, not this file, is what covers that case.
 *
 * ## The retry queue is the part that saves leads
 *
 * Counting a lost lead does not get it back. `queueForRetry` persists the failed
 * payload to localStorage and `flushQueue` re-sends it on the next page load, so
 * the most common real failure — a transient network blip — becomes a lead that
 * arrives late rather than one that never arrives.
 *
 * ## No PII, structurally
 *
 * `TelemetryEvent` has no field that can carry a person's data. That is not a
 * promise to be careful; there is nowhere to put it. The retry queue does hold a
 * real payload, but it never leaves the user's own browser except to the same
 * endpoint the submission was already going to.
 */

export type TelemetryEventName =
  | 'form_view'
  | 'form_submit_attempt'
  | 'form_submit_success'
  | 'form_submit_error';

/** Why a submission failed, in the few buckets that lead to different actions. */
export type TelemetryErrorKind = 'network' | 'http_4xx' | 'http_5xx' | 'timeout' | 'script';

export interface TelemetryEvent {
  form_key: string;
  variant?: string | null;
  event: TelemetryEventName;
  /** Random per page load. NOT a user id: no cookie, nothing survives the tab. */
  session_id: string;
  request_id?: string | null;
  attempt_no?: number;
  error_kind?: TelemetryErrorKind | null;
  http_status?: number | null;
  occurred_at: string;
}

const QUEUE_KEY = 'ph_oa_form_retry_queue';
const QUEUE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const RETRY_BACKOFF_MS = 2000;

interface QueuedSubmission {
  id: string;
  url: string;
  body: string;
  request_id: string;
  queued_at: number;
  form_key: string;
  variant?: string | null;
}

const uuid = (): string =>
  (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`);

/** Classify a thrown submission failure into one of the reporting buckets. */
export function classifyError(error: unknown): { kind: TelemetryErrorKind; status: number | null } {
  const status = (error as { status?: number })?.status ?? null;
  if (typeof status === 'number') {
    return { kind: status >= 500 ? 'http_5xx' : 'http_4xx', status };
  }
  if (error instanceof TypeError) return { kind: 'network', status: null };
  if ((error as { name?: string })?.name === 'AbortError') return { kind: 'timeout', status: null };
  return { kind: 'script', status: null };
}

export interface TelemetryConfig {
  /** `{PUBLIC_API_ENDPOINT}` with no trailing slash. Empty disables everything. */
  endpoint: string;
  formKey: string;
  variant?: string | null;
}

export function createTelemetry(config: TelemetryConfig) {
  const sessionId = uuid();
  let attemptNo = 0;

  /**
   * Fire and forget. `sendBeacon` first: it is the only send that survives the
   * user navigating away mid-form, which is exactly when an abandonment event
   * matters most. `text/plain` avoids a CORS preflight the beacon cannot answer.
   */
  function send(event: Omit<TelemetryEvent, 'session_id' | 'occurred_at'>): void {
    if (!config.endpoint) return;
    try {
      const payload: TelemetryEvent = {
        ...event,
        session_id: sessionId,
        occurred_at: new Date().toISOString(),
      };
      const url = `${config.endpoint}/public/telemetry/form-events`;
      const body = JSON.stringify({ events: [payload] });
      if (navigator.sendBeacon?.(url, new Blob([body], { type: 'text/plain;charset=UTF-8' }))) {
        return;
      }
      void fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        keepalive: true,
        body,
      }).catch(() => {});
    } catch {
      /* Telemetry must never break the form it is measuring. */
    }
  }

  return {
    sessionId,
    view() {
      send({ form_key: config.formKey, variant: config.variant, event: 'form_view' });
    },
    /** Call the moment the button is pressed and validation has passed. */
    attempt(requestId: string) {
      attemptNo += 1;
      send({
        form_key: config.formKey, variant: config.variant, event: 'form_submit_attempt',
        request_id: requestId, attempt_no: attemptNo,
      });
      return attemptNo;
    },
    success(requestId: string) {
      send({
        form_key: config.formKey, variant: config.variant, event: 'form_submit_success',
        request_id: requestId, attempt_no: attemptNo,
      });
    },
    error(requestId: string, error: unknown) {
      const { kind, status } = classifyError(error);
      send({
        form_key: config.formKey, variant: config.variant, event: 'form_submit_error',
        request_id: requestId, attempt_no: attemptNo, error_kind: kind, http_status: status,
      });
    },
  };
}

export type Telemetry = ReturnType<typeof createTelemetry>;

// ── Retry queue ──────────────────────────────────────────────────────────────

function readQueue(): QueuedSubmission[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    // Defensive: a hand-edited or half-written value must not throw on every
    // page load forever after.
    return Array.isArray(parsed) ? (parsed as QueuedSubmission[]) : [];
  } catch {
    return [];
  }
}

function writeQueue(items: QueuedSubmission[]): void {
  try {
    if (items.length === 0) localStorage.removeItem(QUEUE_KEY);
    else localStorage.setItem(QUEUE_KEY, JSON.stringify(items));
  } catch {
    /* Private mode, quota, disabled storage — none of it may break the form. */
  }
}

/** Persist a failed submission so the next page load can try again. */
export function queueForRetry(entry: Omit<QueuedSubmission, 'id' | 'queued_at'>): void {
  const fresh: QueuedSubmission = { ...entry, id: uuid(), queued_at: Date.now() };
  writeQueue([...readQueue(), fresh]);
}

/**
 * Re-send anything queued by an earlier visit, oldest first.
 *
 * Runs on page load rather than on a timer: the user is here now, the network is
 * demonstrably working (this page loaded), and a background timer on a static
 * marketing site is a battery cost with no owner.
 *
 * Entries older than seven days are dropped — a two-week-old lead re-appearing
 * without warning is worse than no lead.
 */
export async function flushQueue(telemetry?: Telemetry): Promise<number> {
  const queue = readQueue();
  if (queue.length === 0) return 0;

  const cutoff = Date.now() - QUEUE_MAX_AGE_MS;
  const survivors: QueuedSubmission[] = [];
  let sent = 0;

  for (const item of queue) {
    if (item.queued_at < cutoff) continue; // expired — dropped, not retried
    try {
      const response = await fetch(item.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Request-Id': item.request_id },
        body: item.body,
      });
      if (!response.ok) throw Object.assign(new Error(`HTTP ${response.status}`), {
        status: response.status,
      });
      sent += 1;
      telemetry?.success(item.request_id);
    } catch (error) {
      // A 4xx will never succeed on retry — the payload itself is the problem —
      // so it is dropped rather than retried until it expires. Anything else is
      // worth another attempt on the next visit.
      const { kind } = classifyError(error);
      if (kind !== 'http_4xx') survivors.push(item);
      telemetry?.error(item.request_id, error);
    }
  }
  writeQueue(survivors);
  return sent;
}

/** One immediate retry after a short backoff, before giving up to the queue. */
export function retryOnce<T>(action: () => Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => { action().then(resolve, reject); }, RETRY_BACKOFF_MS);
  });
}
