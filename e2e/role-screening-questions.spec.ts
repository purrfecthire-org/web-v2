import { test, expect, type Page, type Request } from '@playwright/test';
import { API, XSS, FOUR, TEN } from './fixtures.mjs';

const RED = 'rgb(159, 28, 21)'; // .rv2__f-err colour
const counter = (page: Page, qid: string) => page.locator(`#rv2-q-${qid}-count`);
const answer = (page: Page, qid: string) => page.locator(`#rv2-q-${qid}`);

type Role = typeof FOUR;

/** Mock the backend at the network boundary; returns the captured POSTs. */
async function mockApi(page: Page, role: Role, apply: { status: number; body: unknown }) {
  const posts: Request[] = [];
  await page.route(`${API}/**`, async (route) => {
    const req = route.request();
    if (req.method() === 'GET' && new URL(req.url()).pathname === `/public/roles/${role.slug}`) {
      return route.fulfill({ status: 200, json: { data: role } });
    }
    if (req.method() === 'POST' && new URL(req.url()).pathname === role.apply_path) {
      posts.push(req);
      return route.fulfill({ status: apply.status, json: apply.body });
    }
    return route.fulfill({ status: 404, json: { error: { code: 'not_found' } } });
  });
  page.on('dialog', (d) => { throw new Error(`unexpected dialog: ${d.message()}`); });
  return posts;
}

async function open(page: Page, role: Role) {
  await page.goto(`/roles/${role.slug}/`, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#rv2-form')).toBeVisible();
  // wait for the client refresh to settle (it re-renders untouched questions)
  await expect(page.locator('#rv2-root')).not.toHaveAttribute('data-refreshing', 'true', { timeout: 10_000 }).catch(() => {});
}

async function fillBaseFields(page: Page) {
  await page.locator('#rv2-name').fill('Ada Lovelace');
  await page.locator('#rv2-email').fill('ada@example.com');
  await page.locator('#rv2-phone').fill('+1 555 0100');
  await page.locator('#rv2-linkedin').fill('https://www.linkedin.com/in/ada');
  await page.locator('#rv2-english').selectOption({ index: 1 });
  await page.locator('#rv2-des').fill('110000');
  await page.locator('#rv2-cv').setInputFiles({ name: 'cv.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4\n%%EOF\n') });
}

async function multipart(req: Request): Promise<FormData> {
  const ct = req.headers()['content-type'];
  return new Response(req.postDataBuffer()!, { headers: { 'content-type': ct } }).formData();
}

test('shows the English level field and every custom question with its counter', async ({ page }) => {
  await mockApi(page, FOUR, { status: 500, body: {} });
  await open(page, FOUR);
  await expect(page.getByLabel(/^English level/)).toBeVisible();
  await expect(page.getByText(/Self-assessed English level/i)).toHaveCount(0);
  for (const q of FOUR.questions) {
    await expect(answer(page, q.id)).toBeVisible();
    await expect(counter(page, q.id)).toHaveText(`0 / ${q.max_length}`);
  }
  await expect(page.getByText('Why this role?')).toBeVisible();
  // no HTML maxlength: over-limit text must stay visible, not truncated
  await expect(answer(page, 'q_a0000001')).not.toHaveAttribute('maxlength', /.*/);
});

test('counter turns red past the limit while typing and back when under; an emoji counts as 1', async ({ page }) => {
  await mockApi(page, FOUR, { status: 500, body: {} });
  await open(page, FOUR);
  const box = answer(page, 'q_a0000001');
  const count = counter(page, 'q_a0000001');
  await box.fill('a'.repeat(699));
  await expect(count).toHaveText('699 / 700');
  await expect(count).not.toHaveCSS('color', RED);
  await box.pressSequentially('bcdefghijklmn'); // 712, typed key by key
  await expect(count).toHaveText('712 / 700');
  await expect(count).toHaveCSS('color', RED);
  await expect(box).toHaveValue(/n$/); // nothing truncated
  for (let i = 0; i < 12; i++) await box.press('Backspace');
  await expect(count).toHaveText('700 / 700');
  await expect(count).not.toHaveCSS('color', RED);

  const short = answer(page, 'q_a0000004');
  await short.fill('\u{1F600}'.repeat(300));
  await expect(counter(page, 'q_a0000004')).toHaveText('300 / 300');
  await expect(counter(page, 'q_a0000004')).not.toHaveCSS('color', RED);
  await short.pressSequentially('\u{1F600}');
  await expect(counter(page, 'q_a0000004')).toHaveText('301 / 300');
  await expect(counter(page, 'q_a0000004')).toHaveCSS('color', RED);
});

test('a required question left empty shows its error and sends no request', async ({ page }) => {
  const posts = await mockApi(page, FOUR, { status: 201, body: {} });
  await open(page, FOUR);
  await fillBaseFields(page);
  await page.locator('#rv2-submit').click();
  await expect(page.locator('[data-err-for="rv2-q-q_a0000001"]')).not.toBeEmpty();
  await expect(answer(page, 'q_a0000001')).toHaveAttribute('aria-invalid', 'true');
  await page.waitForTimeout(500);
  expect(posts).toHaveLength(0);
});

test('ten long answers serialize into screening_answers JSON with questions_version', async ({ page }) => {
  const posts = await mockApi(page, TEN, {
    status: 201, body: { data: { id: '0b5a3c9e-7d2f-4e1a-9c3b-1f2e3d4c5b6a', status: 'received' } },
  });
  await open(page, TEN);
  await fillBaseFields(page);
  const expected: Record<string, string> = {};
  TEN.questions.forEach((q, i) => {
    // 700 code points each, with quotes, a newline, an emoji and markup
    const head = `#${i} "quoted" \ ${XSS}\nline2 \u{1F600} `;
    expected[q.id] = head + 'x'.repeat(700 - [...head].length);
  });
  for (const q of TEN.questions) await answer(page, q.id).fill(expected[q.id]);
  await page.locator('#rv2-submit').click();
  await expect(page.locator('#rv2-ok')).toBeVisible();
  expect(posts).toHaveLength(1);
  const fd = await multipart(posts[0]);
  expect(fd.get('questions_version')).toBe('7');
  const sent = JSON.parse(String(fd.get('screening_answers')));
  expect(sent).toEqual(expected);
  for (const v of Object.values(sent)) expect([...(v as string)].length).toBe(700);
  expect(fd.get('english_level')).toBeTruthy();
});

test('409 questions_changed shows the reload card and keeps typed values', async ({ page }) => {
  const posts = await mockApi(page, FOUR, { status: 409, body: { error: { code: 'questions_changed' } } });
  await open(page, FOUR);
  await fillBaseFields(page);
  await answer(page, 'q_a0000001').fill('Because I like hard problems.');
  await answer(page, 'q_a0000003').fill('Scaled a queue.');
  await page.locator('#rv2-submit').click();
  const card = page.locator('#rv2-fail');
  await expect(card).toBeVisible();
  await expect(card).toContainText('This form was updated');
  await expect(card).toContainText('Please reload the page');
  const reload = card.getByRole('button', { name: /reload/i });
  await expect(reload).toBeVisible();
  expect(posts).toHaveLength(1);
  await expect(answer(page, 'q_a0000001')).toHaveValue('Because I like hard problems.');
  await expect(answer(page, 'q_a0000003')).toHaveValue('Scaled a queue.');
  await expect(page.locator('#rv2-name')).toHaveValue('Ada Lovelace');
  await Promise.all([page.waitForEvent('framenavigated'), reload.click()]);
});

test('markup in a label or an answer renders as text, never as an element', async ({ page }) => {
  await mockApi(page, FOUR, { status: 500, body: {} });
  await open(page, FOUR);
  await expect(page.getByText(`Label with ${XSS}`)).toBeVisible();
  await answer(page, 'q_a0000002').fill(XSS);
  await expect(answer(page, 'q_a0000002')).toHaveValue(XSS);
  await expect(page.locator('#rv2-questions img')).toHaveCount(0);
  await expect(page.locator('img[src="x"]')).toHaveCount(0);
});
