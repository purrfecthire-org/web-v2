/** Proposed intake contract for a server-side commercial adapter. No endpoint is assumed. */
export interface SearchReadInput {
  work_email: string;
  company: string;
  role: string;
  hire_change: string;
  needed_by?: string;
  website?: string;
  audience: 'founder' | 'investor';
  attribution: Record<string, string>;
}

export class SearchReadError extends Error {
  code: 'unconfigured' | 'validation' | 'unavailable' | 'unconfirmed';
  status?: number;
  constructor(code: SearchReadError['code'], status?: number) {
    super(code);
    this.code = code;
    this.status = status;
  }
}

export async function submitSearchRead(endpoint: string, input: SearchReadInput, requestId: string, send: typeof fetch = fetch): Promise<string> {
  if (!endpoint) throw new SearchReadError('unconfigured');
  const url = new URL(endpoint);
  if (url.protocol !== 'https:' && url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') throw new SearchReadError('unconfigured');
  const response = await send(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId },
    body: JSON.stringify(input),
    signal: AbortSignal.timeout(20000),
    credentials: 'omit',
  });
  if (!response.ok) throw new SearchReadError(response.status === 422 || response.status === 400 ? 'validation' : 'unavailable', response.status);
  const body = await response.json();
  // A click or an arbitrary 2xx is not evidence that the receiving system saved the lead.
  if (body?.data?.status !== 'received' || typeof body?.data?.id !== 'string' || !body.data.id) throw new SearchReadError('unconfirmed');
  return body.data.id;
}
