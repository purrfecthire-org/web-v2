import test from 'node:test';
import assert from 'node:assert/strict';
import { readPublicRoleJson, readPublicRolePages } from '../src/lib/publicRoleRead.ts';

const endpoint = 'https://isolated.invalid/public/roles';
const roles = (count: number, start = 0) => Array.from({ length: count }, (_, i) => ({ slug: `role-${start + i}` }));
const reply = (data: unknown, status = 200, headers: HeadersInit = {}) => new Response(JSON.stringify(data), { status, headers });

test('a transient network failure recovers without changing the public source or request ID', async (t) => {
  const requests: { url: string; method?: string; id: string | null }[] = [];
  t.mock.method(globalThis, 'fetch', async (url: string, init: RequestInit) => {
    requests.push({ url, method: init.method, id: new Headers(init.headers).get('X-Request-Id') });
    if (requests.length === 1) throw new TypeError('isolated network failure');
    return reply({ data: roles(9) });
  });
  const response = await readPublicRoleJson(endpoint, { headers: { 'X-Request-Id': 'same-read' }, retryDelayMs: 0 });
  assert.equal(response.ok, true);
  assert.equal(requests.length, 2);
  assert.deepEqual(requests, Array(2).fill({ url: endpoint, method: 'GET', id: 'same-read' }));
});

test('server failures are retried at most twice, with success or a real HTTP failure', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => ++calls === 1 ? reply({}, 503) : reply({ data: [] }));
  assert.equal((await readPublicRoleJson(endpoint, { retryDelayMs: 0 })).ok, true);
  assert.equal(calls, 2);
  calls = 0;
  t.mock.method(globalThis, 'fetch', async () => { calls++; return reply({}, 502); });
  assert.deepEqual(await readPublicRoleJson(endpoint, { retryDelayMs: 0 }), { ok: false, status: 502, json: null });
  assert.equal(calls, 3);
});

test('404 and other definitive client errors are not retried or converted to an empty feed', async (t) => {
  for (const status of [400, 401, 403, 404, 422]) {
    let calls = 0;
    t.mock.method(globalThis, 'fetch', async () => { calls++; return reply({}, status); });
    await assert.rejects(readPublicRolePages(endpoint, { retryDelayMs: 0 }), new RegExp(`HTTP ${status}`));
    assert.equal(calls, 1);
  }
});

test('429 respects Retry-After and retries only when the delay fits the existing budget', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => ++calls === 1 ? reply({}, 429, { 'Retry-After': '0' }) : reply({ data: [] }));
  assert.equal((await readPublicRoleJson(endpoint)).ok, true);
  assert.equal(calls, 2);
  for (const headers of [{}, { 'Retry-After': '60' }, { 'Retry-After': 'not-a-date' }, { 'Retry-After': '1.5' },
    { 'Retry-After': new Date(Date.now() + 60_000).toUTCString() }]) {
    calls = 0;
    t.mock.method(globalThis, 'fetch', async () => { calls++; return reply({}, 429, headers); });
    assert.equal((await readPublicRoleJson(endpoint, { timeoutMs: 50 })).status, 429);
    assert.equal(calls, 1);
  }
});

test('malformed JSON and list envelopes fail honestly without retries or false zero results', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => { calls++; return new Response('{broken'); });
  await assert.rejects(readPublicRoleJson(endpoint), SyntaxError);
  assert.equal(calls, 1);
  for (const body of [{ data: null }, { data: [{}] }, { data: [], meta: { total: 2, limit: 25, offset: 0 } }]) {
    calls = 0;
    t.mock.method(globalThis, 'fetch', async () => { calls++; return reply(body); });
    await assert.rejects(readPublicRolePages(endpoint), /Malformed|Incomplete/);
    assert.equal(calls, 1);
  }
});

test('one timeout budget covers retry delays and a later hanging attempt', async (t) => {
  let calls = 0;
  let aborted = false;
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    calls++;
    if (calls === 1) throw new TypeError('isolated first failure');
    return new Promise((_resolve, reject) => init.signal?.addEventListener('abort', () => {
      aborted = true;
      reject(init.signal?.reason);
    }, { once: true }));
  });
  await assert.rejects(readPublicRoleJson(endpoint, { timeoutMs: 80, retryDelayMs: 20 }), { name: 'TimeoutError' });
  assert.equal(calls, 2);
  assert.equal(aborted, true);
});

test('the deadline also covers response bodies that never finish', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => ({
    ok: true, status: 200, json: () => new Promise(() => {}),
  }));
  await assert.rejects(readPublicRoleJson(endpoint, { timeoutMs: 20 }), { name: 'TimeoutError' });
});

test('nine current roles, a valid empty result and an exact 25-role page finish without extra requests', async (t) => {
  for (const count of [0, 9, 25]) {
    let calls = 0;
    t.mock.method(globalThis, 'fetch', async () => {
      calls++;
      return reply({ data: roles(count), meta: { total: count, limit: 25, offset: 0 } });
    });
    assert.equal((await readPublicRolePages(endpoint)).length, count);
    assert.equal(calls, 1);
  }
});

test('pagination includes roles beyond 25 and honours the actual returned cursor and page size', async (t) => {
  const requests: URL[] = [];
  t.mock.method(globalThis, 'fetch', async (url: string) => {
    const parsed = new URL(url);
    requests.push(parsed);
    const offset = Number(parsed.searchParams.get('offset') || 0);
    return reply({ data: roles(offset === 0 ? 25 : 4, offset), meta: { total: 29, limit: 25, offset } });
  });
  assert.deepEqual(await readPublicRolePages(endpoint), roles(29));
  assert.equal(requests.length, 2);
  assert.equal(requests[1].searchParams.get('limit'), '25');
  assert.equal(requests[1].searchParams.get('offset'), '25');
});

test('an incomplete or changing second page cannot publish a partial or false-empty list', async (t) => {
  for (const second of [
    { data: [], meta: { total: 26, limit: 25, offset: 25 } },
    { data: roles(1), meta: { total: 26, limit: 25, offset: 25 } },
    { data: [], meta: { total: 25, limit: 25, offset: 25 } },
  ]) {
    let calls = 0;
    t.mock.method(globalThis, 'fetch', async () => ++calls === 1
      ? reply({ data: roles(25), meta: { total: 26, limit: 25, offset: 0 } }) : reply(second));
    await assert.rejects(readPublicRolePages(endpoint), /Incomplete|changed/);
    assert.equal(calls, 2);
  }
});

test('optional metadata remains compatible without allowing an ignored offset to loop', async (t) => {
  for (const count of [0, 9]) {
    t.mock.method(globalThis, 'fetch', async () => reply({ data: roles(count) }));
    assert.equal((await readPublicRolePages(endpoint)).length, count);
  }
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => { calls++; return reply({ data: roles(25) }); });
  await assert.rejects(readPublicRolePages(endpoint), /Incomplete/);
  assert.equal(calls, 2);
});

test('pagination shares the read deadline instead of renewing it for every page', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    calls++;
    if (calls === 1) {
      await new Promise((resolve) => setTimeout(resolve, 20));
      return reply({ data: roles(1), meta: { total: 2, limit: 1, offset: 0 } });
    }
    return { ok: true, status: 200, json: () => new Promise(() => {}) };
  });
  await assert.rejects(readPublicRolePages(endpoint, { timeoutMs: 70 }), { name: 'TimeoutError' });
  assert.equal(calls, 2);
});
