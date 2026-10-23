import test from 'node:test';
import assert from 'node:assert/strict';
import { getHelpTopics, helpSourcePath, helpWhatsAppUrl, HELP_MESSAGE_LIMIT } from '../src/lib/purrfectHelp.ts';

test('candidate pages expose application guidance without advisory offers', () => {
  const topics = getHelpTopics('candidates');
  assert.deepEqual(topics.map((topic) => topic.id), ['application']);
  assert.equal(topics[0].action.href, '/roles');
  assert.ok(!JSON.stringify(topics).includes('USD'));
  assert.match(topics[0].detail, /never required/);
});

test('the general guide routes each approved journey to its own next step', () => {
  const topics = getHelpTopics();
  assert.deepEqual(topics.map((topic) => topic.id), ['hiring', 'next-move', 'current-role', 'application']);
  assert.equal(topics[0].action.href, 'https://cal.com/purrfect-hire/founders-call');
  assert.equal(topics[1].action.href, '/offer-acceleration/apply');
  assert.match(topics[1].answer.join(' '), /USD 2,000/);
  assert.match(topics[2].answer.join(' '), /USD 5,000/);
  assert.match(topics[2].answer.join(' '), /six months, nine private sessions/);
  assert.match(topics[2].answer.join(' '), /eight asynchronous checkpoints/);
});

test('WhatsApp receives only an encoded visitor draft, selected topic and clean source path', () => {
  const url = new URL(helpWhatsAppUrl('hiring', 'A question & a link? #yes\nSecond line', '/for-companies/?email=private@example.com#contact'));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/18312245188');
  assert.equal(url.searchParams.size, 1);
  const draft = url.searchParams.get('text')!;
  assert.match(draft, /Hiring for my company/);
  assert.match(draft, /A question & a link\? #yes\nSecond line/);
  assert.ok(draft.endsWith('Page: https://purrfecthire.com/for-companies/'));
  assert.ok(!draft.includes('private@example.com'));
});

test('automatic page context excludes external URLs, controls, queries and fragments', () => {
  for (const value of ['https://example.com/secret', '//example.com/secret', '/roles\\private', '/roles\nprivate']) assert.equal(helpSourcePath(value), '/');
  assert.equal(helpSourcePath('/roles/example?token=secret#apply'), '/roles/example');
});

test('a blank draft remains useful and a long question is bounded', () => {
  const blank = new URL(helpWhatsAppUrl('application', '   ', '/roles/')).searchParams.get('text')!;
  assert.match(blank, /Applying to a role/);
  const long = new URL(helpWhatsAppUrl('current-role', 'x'.repeat(HELP_MESSAGE_LIMIT + 20))).searchParams.get('text')!;
  assert.equal(long.match(/x/g)?.length, HELP_MESSAGE_LIMIT);
});

test('company and talent guides keep their narratives separate', () => {
  assert.deepEqual(getHelpTopics('companies').map(topic => topic.id), ['hiring']);
  assert.deepEqual(getHelpTopics('talent').map(topic => topic.id), ['next-move', 'current-role', 'application']);
  assert.ok(!JSON.stringify(getHelpTopics('companies')).includes('USD'));
  assert.ok(!JSON.stringify(getHelpTopics('talent')).includes('founders-call'));
});

test('an emoji at the draft boundary and malformed text cannot break the handoff', () => {
  const draft = new URL(helpWhatsAppUrl('hiring', 'x'.repeat(HELP_MESSAGE_LIMIT - 1) + '😀')).searchParams.get('text')!;
  assert.match(draft, /Hiring for my company/);
  assert.ok(draft.includes('x'.repeat(HELP_MESSAGE_LIMIT - 1)));
  assert.doesNotThrow(() => helpWhatsAppUrl('hiring', '\ud800'));
});
