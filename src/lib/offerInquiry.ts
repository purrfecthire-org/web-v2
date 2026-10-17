/** The existing public OA lead contract. These keys are owned by the ATS. */
export const OFFER_INQUIRY_GOALS = [
  { key: 'change_industry', label: 'Move to a different industry' },
  { key: 'change_role_or_career', label: 'Move to a different role or career' },
  { key: 'same_role_industry_usd_offer', label: 'Find a USD offer in my current field' },
  { key: 'level_up_seniority', label: 'Move into a more senior role' },
  { key: 'unclear', label: 'Get clear on my next move' },
] as const;

export interface OfferInquiryInput {
  linkedin: string;
  email: string;
  objective: string;
  fill_time_ms: number;
  website?: string;
}

export class OfferInquiryError extends Error {
  code: 'unconfigured' | 'validation' | 'unavailable' | 'unconfirmed';
  status?: number;
  constructor(code: OfferInquiryError['code'], status?: number) {
    // Only a fixed code can reach the error reporter, never a form value.
    super(code);
    this.name = 'OfferInquiryError';
    this.code = code;
    this.status = status;
  }
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** A 2xx alone is insufficient: the ATS must return its OA receipt. */
export async function submitOfferInquiry(
  apiEndpoint: string,
  input: OfferInquiryInput,
  requestId: string,
  send: typeof fetch = fetch,
): Promise<string> {
  if (!apiEndpoint.trim()) throw new OfferInquiryError('unconfigured');
  let url: URL;
  try {
    url = new URL(`${apiEndpoint.trim().replace(/\/+$/, '')}/public/oa/leads`);
  } catch {
    throw new OfferInquiryError('unconfigured');
  }
  const local = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  if ((url.protocol !== 'https:' && !(url.protocol === 'http:' && local)) || url.username || url.password || url.search || url.hash) {
    throw new OfferInquiryError('unconfigured');
  }

  const linkedin = input.linkedin.trim();
  const email = input.email.trim();
  if (!linkedin || linkedin.length > 500 || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !OFFER_INQUIRY_GOALS.some((goal) => goal.key === input.objective) ||
      !Number.isSafeInteger(input.fill_time_ms) || input.fill_time_ms < 0 ||
      input.website?.trim() || !UUID.test(requestId)) {
    throw new OfferInquiryError('validation');
  }

  let response: Response;
  try {
    response = await send(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId },
      credentials: 'omit',
      signal: AbortSignal.timeout(20_000),
      // Allowlist only the documented OA fields. No form data enters a URL.
      body: JSON.stringify({
        linkedin, email, objective: input.objective,
        variant: 'preguntas', source: 'portal', locale: 'en',
        fill_time_ms: input.fill_time_ms, website: '',
      }),
    });
  } catch {
    throw new OfferInquiryError('unavailable');
  }
  if (!response.ok) {
    throw new OfferInquiryError(response.status === 400 || response.status === 422 ? 'validation' : 'unavailable', response.status);
  }
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new OfferInquiryError('unconfirmed');
  }
  const receipt = body as { data?: { id?: unknown; status?: unknown } } | null;
  if (receipt?.data?.status !== 'received' || typeof receipt.data.id !== 'string' || !UUID.test(receipt.data.id)) {
    throw new OfferInquiryError('unconfirmed');
  }
  return receipt.data.id;
}
