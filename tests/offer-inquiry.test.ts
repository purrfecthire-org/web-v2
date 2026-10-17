import test from 'node:test';
import assert from 'node:assert/strict';
import { submitOfferInquiry, OfferInquiryError } from '../src/lib/offerInquiry.ts';

const requestId = '33c78a7c-3bd5-4b66-9591-478579293bc6';
const receiptId = '32c78a7c-3bd5-4b66-9591-478579293bc6';
const input = { linkedin: ' linkedin.com/in/example ', email: ' senior@example.com ', objective: 'level_up_seniority', fill_time_ms: 4500, website: '' };
const endpoint = 'https://example.com/';

test('an unconfigured OA form sends nothing and cannot confirm receipt', async () => {
  let called = false;
  await assert.rejects(submitOfferInquiry('', input, requestId, (async () => { called = true; return new Response(); }) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === 'unconfigured');
  assert.equal(called, false);
});

test('OA uses the exact public contract and requires its received receipt', async () => {
  const id = await submitOfferInquiry(endpoint, { ...input, company: 'must not be sent' } as typeof input, requestId, (async (url, options) => {
    assert.equal(String(url), 'https://example.com/public/oa/leads');
    assert.equal(options?.method, 'POST');
    assert.equal(options?.credentials, 'omit');
    assert.equal((options?.headers as Record<string, string>)['X-Request-Id'], requestId);
    assert.equal((options?.headers as Record<string, string>)['Content-Type'], 'application/json');
    assert.ok(options?.signal instanceof AbortSignal);
    assert.deepEqual(JSON.parse(String(options?.body)), { linkedin: 'linkedin.com/in/example', email: 'senior@example.com', objective: 'level_up_seniority', variant: 'preguntas', source: 'portal', locale: 'en', fill_time_ms: 4500, website: '' });
    return Response.json({ data: { id: receiptId, status: 'received' } });
  }) as typeof fetch);
  assert.equal(id, receiptId);
});

test('arbitrary 2xx, invalid UUID and accepted status cannot become a received screen', async () => {
  for (const receipt of [{ ok: true }, { data: { id: 'not-a-uuid', status: 'received' } }, { data: { id: receiptId, status: 'accepted' } }, { data: { id: receiptId } }]) {
    await assert.rejects(submitOfferInquiry(endpoint, input, requestId, (async () => Response.json(receipt)) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === 'unconfirmed');
  }
});

test('invalid JSON cannot confirm receipt', async () => {
  await assert.rejects(submitOfferInquiry(endpoint, input, requestId, (async () => new Response('<html>not a receipt</html>')) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === 'unconfirmed');
});

test('honeypot, unknown goal and invalid contact are blocked before any request', async () => {
  let calls = 0;
  for (const patch of [{ website: 'spam' }, { objective: 'career_compounding' }, { email: 'not-email' }, { linkedin: '' }, { fill_time_ms: -1 }]) {
    await assert.rejects(submitOfferInquiry(endpoint, { ...input, ...patch }, requestId, (async () => { calls++; return new Response(); }) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === 'validation');
  }
  assert.equal(calls, 0);
});

test('unsafe endpoint configuration cannot send personal data', async () => {
  let calls = 0;
  for (const url of ['http://example.com', 'not a URL', 'https://example.com?tracking=1', 'https://user:secret@example.com']) {
    await assert.rejects(submitOfferInquiry(url, input, requestId, (async () => { calls++; return new Response(); }) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === 'unconfigured');
  }
  assert.equal(calls, 0);
});

test('network failures expose only a fixed non-PII error code', async () => {
  await assert.rejects(submitOfferInquiry(endpoint, input, requestId, (async () => { throw new Error(input.email); }) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === 'unavailable' && !err.message.includes(input.email));
});

test('HTTP failure preserves validation versus service failure without confirming receipt', async () => {
  for (const status of [422, 429, 500]) {
    await assert.rejects(submitOfferInquiry(endpoint, input, requestId, (async () => Response.json({}, { status })) as typeof fetch), (err: unknown) => err instanceof OfferInquiryError && err.code === (status === 422 ? 'validation' : 'unavailable') && err.status === status);
  }
});
