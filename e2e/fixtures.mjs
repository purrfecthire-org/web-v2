// Fixture roles shared by the e2e build server (serve.mjs) and the spec, so the
// prerendered page and the page.route mocks describe the same role.
export const API = 'http://127.0.0.1:4799';
export const XSS = '<img src=x onerror=alert(1)>';

const base = (slug, title) => ({
  slug, title, company_label: 'Confidential Company', location: 'Remote', country: null,
  country_code: 'US', work_model: 'remote', contract_type: 'Full-time',
  salary: { min: 100000, max: 120000, currency: 'USD' }, tags: ['e2e'], english_level: 'C1',
  yc_batch: null, posted_at: '2026-11-20T00:00:00Z',
});
const text = (id, label, max_length, required = false) =>
  ({ id, type: 'text', label, hint: null, required, max_length, options: null });

const detail = (row, questions, questions_version) => ({
  ...row, public_description: 'An e2e fixture role.', company_profile: null,
  apply_path: `/public/roles/${row.slug}/applications`, questions, questions_version,
});

export const FOUR = detail(base('e2e-four', 'E2E Four Questions'), [
  text('q_a0000001', 'Why this role?', 700, true),
  text('q_a0000002', `Label with ${XSS}`, 700),
  text('q_a0000003', 'A hard problem you solved', 700),
  text('q_a0000004', 'Anything else?', 300),
], 3);

export const TEN = detail(base('e2e-ten', 'E2E Ten Questions'),
  Array.from({ length: 10 }, (_, i) => text(`q_b00000${String(i).padStart(2, '0')}`, `Question ${i + 1}`, 700, true)), 7);

export const ROLES = [FOUR, TEN];
