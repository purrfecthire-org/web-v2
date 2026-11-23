import test from 'node:test';
import assert from 'node:assert/strict';
import {
  roleQuestionsHTML, screeningAnswerError, codePointLength, counterText,
  type PublicQuestion,
} from '../src/lib/screeningQuestions.ts';

const XSS = '<img src=x onerror=alert(1)>';
const q = (over: Partial<PublicQuestion>): PublicQuestion => ({
  id: 'q_0a1b2c3d', type: 'text', label: 'Why us?', hint: null, required: true, max_length: 500, options: null, ...over,
});
const choice = (type: 'single_choice' | 'multi_choice', over: Partial<PublicQuestion> = {}) =>
  q({ type, max_length: null, options: [{ key: 'o_aaaaaa', label: 'Yes' }, { key: 'o_bbbbbb', label: 'No' }], ...over });

test('no questions (empty, null, missing) renders nothing', () => {
  assert.equal(roleQuestionsHTML([]), '');
  assert.equal(roleQuestionsHTML(null), '');
  assert.equal(roleQuestionsHTML(undefined), '');
});

test('label, hint and option text are escaped in every type', () => {
  const html = roleQuestionsHTML([
    q({ label: XSS, hint: XSS }),
    q({ id: 'q_00000002', type: 'url', label: XSS, hint: XSS, max_length: null }),
    choice('single_choice', { id: 'q_00000003', label: XSS, hint: XSS, options: [{ key: 'o_aaaaaa', label: XSS }, { key: 'o_bbbbbb', label: 'No' }] }),
    choice('multi_choice', { id: 'q_00000004', label: XSS, options: [{ key: 'o_aaaaaa', label: XSS }, { key: 'o_bbbbbb', label: 'No' }] }),
  ]);
  assert.ok(!html.includes('<img'));
  assert.ok(html.includes('&lt;img src=x onerror=alert(1)&gt;'));
});

test('hostile ids and option keys cannot break out of attributes', () => {
  const html = roleQuestionsHTML([choice('single_choice', { id: '"><script>x</script>', options: [{ key: '"><b>', label: 'A' }, { key: 'k2', label: 'B' }] })]);
  assert.ok(!html.includes('<script>'));
  assert.ok(!html.includes('"><b>'));
});

test('text question is a textarea with a counter and no maxlength attribute', () => {
  const html = roleQuestionsHTML([q({ max_length: 300 })]);
  assert.match(html, /<textarea/);
  assert.ok(!/maxlength/i.test(html));
  assert.match(html, />0 \/ 300</);
});

test('url question is input type=url; required shows a marker, optional does not', () => {
  const html = roleQuestionsHTML([q({ type: 'url', max_length: null, label: 'GitHub' }), q({ id: 'q_00000002', type: 'url', label: 'Site', required: false })]);
  assert.match(html, /type="url"/);
  assert.match(html, /GitHub \*<\/label>/);
  assert.match(html, /Site<\/label>/);
});

test('single choice renders radios sharing one name; multi renders checkboxes', () => {
  const single = roleQuestionsHTML([choice('single_choice')]);
  assert.equal((single.match(/type="radio"/g) ?? []).length, 2);
  assert.equal(new Set(single.match(/name="[^"]+"/g)).size, 1);
  assert.match(single, /<fieldset/);
  assert.match(single, /value="o_aaaaaa"/);
  const multi = roleQuestionsHTML([choice('multi_choice')]);
  assert.equal((multi.match(/type="checkbox"/g) ?? []).length, 2);
});

test('hint and error are wired for assistive tech', () => {
  const html = roleQuestionsHTML([q({ hint: 'Be brief' })]);
  assert.match(html, /aria-describedby="rv2-q-q_0a1b2c3d-hint rv2-q-q_0a1b2c3d-error/);
  assert.match(html, /data-err-for="rv2-q-q_0a1b2c3d"/);
});

test('the counter counts an emoji as one character', () => {
  assert.equal(codePointLength('a\u{1F600}b'), 3);
  assert.equal(counterText('\u{1F600}\u{1F600}', 500), '2 / 500');
});

test('text limit is enforced in code points, with the boundary exact', () => {
  const t = q({ max_length: 50 });
  assert.equal(screeningAnswerError(t, '\u{1F600}'.repeat(50)), null);
  assert.ok(screeningAnswerError(t, '\u{1F600}'.repeat(51)));
  assert.equal(screeningAnswerError(t, 'a'.repeat(50)), null);
  assert.ok(screeningAnswerError(t, 'a'.repeat(51)));
});

test('required blocks empty answers, optional allows them', () => {
  assert.ok(screeningAnswerError(q({}), '   '));
  assert.equal(screeningAnswerError(q({ required: false }), ''), null);
  assert.ok(screeningAnswerError(choice('single_choice'), []));
  assert.equal(screeningAnswerError(choice('multi_choice', { required: false }), []), null);
});

test('urls must be http(s) with a host', () => {
  const u = q({ type: 'url', max_length: null });
  assert.equal(screeningAnswerError(u, 'https://github.com/me'), null);
  assert.ok(screeningAnswerError(u, 'javascript:alert(1)'));
  assert.ok(screeningAnswerError(u, 'github.com/me'));
  assert.ok(screeningAnswerError(u, 'https://' + 'a'.repeat(500) + '.com'));
});

test('choices accept only listed keys, one for single, distinct for multi', () => {
  assert.equal(screeningAnswerError(choice('single_choice'), ['o_aaaaaa']), null);
  assert.ok(screeningAnswerError(choice('single_choice'), ['o_aaaaaa', 'o_bbbbbb']));
  assert.ok(screeningAnswerError(choice('single_choice'), ['o_zzzzzz']));
  assert.equal(screeningAnswerError(choice('multi_choice'), ['o_aaaaaa', 'o_bbbbbb']), null);
  assert.ok(screeningAnswerError(choice('multi_choice'), ['o_aaaaaa', 'o_aaaaaa']));
});
