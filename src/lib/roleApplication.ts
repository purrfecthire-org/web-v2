const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** The public ATS contract requires both a durable UUID and received status. */
export function receivedRoleApplicationId(body: unknown): string | null {
  const receipt = body as { data?: { id?: unknown; status?: unknown } } | null;
  return receipt?.data?.status === 'received' && typeof receipt.data.id === 'string' && UUID.test(receipt.data.id)
    ? receipt.data.id
    : null;
}

/**
 * A phone must carry its country code (fix/apply-phone-country-code, 2026-11-24): a real applicant sent
 * "2145550123" and nobody could tell which country to dial. Same rule as the ATS backend: strip spaces,
 * dashes, dots and parentheses, turn a leading 00 into +, then + and 8-15 digits, the first not 0 (E.164).
 */
export function isInternationalPhone(raw: string): boolean {
  let cleaned = raw.trim().replace(/[\s\-.()]/g, '');
  if (cleaned.startsWith('00')) cleaned = '+' + cleaned.slice(2);
  return /^\+[1-9]\d{7,14}$/.test(cleaned);
}

/** Map the documented FastAPI 422 field locations, never echo submitted values. */
export function roleApplicationFieldErrors(body: unknown): Record<string, string> {
  const messages: Record<string, [string, string]> = {
    full_name: ['rv2-name', 'Please check your full name (up to 200 characters).'],
    email: ['rv2-email', 'Please check your email address (up to 320 characters).'],
    phone: ['rv2-phone', 'Please check your phone number, including the country code.'],
    linkedin: ['rv2-linkedin', 'Please check your LinkedIn profile (up to 300 characters).'],
    english_level: ['rv2-english', 'Please select your English level.'],
    desired_salary_usd: ['rv2-des', 'Please enter your expected annual compensation in USD.'],
    cv: ['rv2-cv', 'Please check your CV. Use a PDF no larger than 3 MB.'],
  };
  // Two shapes: FastAPI's raw {detail:[{loc:['body',field]}]} and the ATS envelope {error:{details:[{field}]}}.
  const raw = body as { detail?: unknown; error?: { details?: unknown } } | null;
  const errors: Record<string, string> = {};
  const fields: unknown[] = [];
  if (Array.isArray(raw?.detail)) {
    for (const issue of raw.detail) if (Array.isArray(issue?.loc) && issue.loc[0] === 'body') fields.push(issue.loc[1]);
  }
  if (Array.isArray(raw?.error?.details)) {
    for (const issue of raw.error.details) fields.push((issue as { field?: unknown } | null)?.field);
  }
  for (const field of fields) {
    if (typeof field !== 'string' || !Object.hasOwn(messages, field)) continue;
    const [id, message] = messages[field];
    errors[id] = message;
  }
  return errors;
}

/**
 * Keep an unchanged draft's request metadata stable after an uncertain response.
 * Editing the draft starts another attempt. This does not assert backend deduplication.
 */
export { createSubmissionAttempts as createRoleApplicationAttempts } from './submissionState.ts';
