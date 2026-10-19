import test from 'node:test';
import assert from 'node:assert/strict';
import { createRoleApplicationAttempts, receivedRoleApplicationId } from '../src/lib/roleApplication.ts';

const receiptId = '32c78a7c-3bd5-4b66-9591-478579293bc6';
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

test('a role application confirms only the ATS UUID with received status', () => {
  assert.equal(receivedRoleApplicationId({ data: { id: receiptId, status: 'received' }, meta: {} }), receiptId);
});

test('missing or malformed role receipts cannot confirm an application', () => {
  for (const body of [null, undefined, true, 'received', [], {}, { data: null },
    { data: { status: 'received' } }, { data: { id: 'not-a-uuid', status: 'received' } },
    { data: { id: 123, status: 'received' } }, { data: { id: receiptId } },
    { data: { id: receiptId, status: 'accepted' } }, { data: { id: receiptId, status: 'pending' } }]) {
    assert.equal(receivedRoleApplicationId(body), null);
  }
});

test('an unchanged draft retains its request ID and payload timing after a retry', () => {
  const attempts = createRoleApplicationAttempts();
  const first = attempts.current(4200);
  const retry = attempts.current(18000);
  assert.match(first.requestId, uuid);
  assert.equal(retry.requestId, first.requestId);
  assert.equal(retry.fillTimeMs, 4200);
});

test('editing a draft starts a distinct request with its updated timing', () => {
  const attempts = createRoleApplicationAttempts();
  const first = attempts.current(4200);
  attempts.invalidate();
  const edited = attempts.current(18000);
  assert.notEqual(edited.requestId, first.requestId);
  assert.match(edited.requestId, uuid);
  assert.equal(edited.fillTimeMs, 18000);
});

test('attempt timing remains valid for old tabs and clock changes', () => {
  assert.equal(createRoleApplicationAttempts().current(-200).fillTimeMs, 0);
  assert.equal(createRoleApplicationAttempts().current(100_000_000).fillTimeMs, 86_400_000);
  assert.equal(createRoleApplicationAttempts().current(Number.NaN).fillTimeMs, 0);
});
