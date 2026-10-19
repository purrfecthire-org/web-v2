import test from 'node:test';
import assert from 'node:assert/strict';
import { createSubmissionAttempts, lockSubmissionFields } from '../src/lib/submissionState.ts';

test('pending submission locks text, selection and file controls without clearing their values', () => {
  const file = { name: 'example.pdf' };
  const fields = [
    { disabled: false, value: 'test@example.invalid' },
    { disabled: false, value: 'level_up_seniority' },
    { disabled: false, value: '', files: [file] },
    { disabled: true, value: 'previously disabled' },
  ];
  const restore = lockSubmissionFields({ querySelectorAll: () => fields } as unknown as HTMLFormElement);
  assert.ok(fields.every((field) => field.disabled));
  assert.equal(fields[0].value, 'test@example.invalid');
  assert.equal(fields[2].files?.[0], file);
  restore();
  assert.deepEqual(fields.map((field) => field.disabled), [false, false, false, true]);
  assert.equal(fields[2].files?.[0], file);
});

test('finally restores the exact editable state after a rejected request', async () => {
  const fields = [{ disabled: false }, { disabled: true }];
  const restore = lockSubmissionFields({ querySelectorAll: () => fields } as unknown as HTMLFormElement);
  try {
    await Promise.reject(new Error('isolated failure'));
  } catch {
    assert.ok(fields.every((field) => field.disabled));
  } finally {
    restore();
  }
  assert.deepEqual(fields.map((field) => field.disabled), [false, true]);
});

test('OA and role retries retain both request correlation and submitted timing until the draft changes', () => {
  const attempts = createSubmissionAttempts();
  const sent = attempts.current(1200);
  assert.deepEqual(attempts.current(29000), sent);
  attempts.invalidate();
  const edited = attempts.current(31000);
  assert.notEqual(edited.requestId, sent.requestId);
  assert.equal(edited.fillTimeMs, 31000);
});
