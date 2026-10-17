import test from 'node:test';
import assert from 'node:assert/strict';
import { submitSearchRead, SearchReadError } from '../src/lib/searchRead.ts';

const request = { work_email: 'founder@example.com', company: 'Example', role: 'Founding Engineer', hire_change: 'Ship the product', audience: 'founder' as const, attribution: { utm_source: 'linkedin' } };

test('an unconfigured intake never sends or reports success', async () => {
  let sent = false;
  await assert.rejects(submitSearchRead('', request, 'req-1', (async () => { sent = true; return new Response(); }) as typeof fetch), (err: unknown) => err instanceof SearchReadError && err.code === 'unconfigured');
  assert.equal(sent, false);
});
test('calendar handoff requires a stored receipt and uses the request id header', async () => {
  const id = await submitSearchRead('https://example.com/intake', request, 'req-2', (async (_url, options) => {
    assert.equal((options?.headers as Record<string, string>)['X-Request-Id'], 'req-2');
    assert.deepEqual(JSON.parse(String(options?.body)), request);
    return Response.json({ data: { id: 'stored-1', status: 'received' } }, { status: 201 });
  }) as typeof fetch);
  assert.equal(id, 'stored-1');
});
test('a generic 2xx cannot produce a received screen', async () => {
  await assert.rejects(submitSearchRead('https://example.com/intake', request, 'req-3', (async () => Response.json({ ok: true })) as typeof fetch), (err: unknown) => err instanceof SearchReadError && err.code === 'unconfirmed');
});
test('validation failure preserves the failed state', async () => {
  await assert.rejects(submitSearchRead('https://example.com/intake', request, 'req-4', (async () => Response.json({}, { status: 422 })) as typeof fetch), (err: unknown) => err instanceof SearchReadError && err.code === 'validation' && err.status === 422);
});
