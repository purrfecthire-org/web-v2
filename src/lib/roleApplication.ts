const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** The public ATS contract requires both a durable UUID and received status. */
export function receivedRoleApplicationId(body: unknown): string | null {
  const receipt = body as { data?: { id?: unknown; status?: unknown } } | null;
  return receipt?.data?.status === 'received' && typeof receipt.data.id === 'string' && UUID.test(receipt.data.id)
    ? receipt.data.id
    : null;
}

/**
 * Keep an unchanged draft's request metadata stable after an uncertain response.
 * Editing the draft starts another attempt. This does not assert backend deduplication.
 */
export { createSubmissionAttempts as createRoleApplicationAttempts } from './submissionState.ts';
