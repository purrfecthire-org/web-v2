import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePublicText, renderMarkdown } from '../src/lib/markdown.ts';

test('public prose uses commas and readable numeric ranges', () => {
  assert.equal(normalizePublicText('Senior engineer — product team'), 'Senior engineer, product team');
  assert.equal(normalizePublicText('USD 150,000–250,000 annual base'), 'USD 150,000 to 250,000 annual base');
  assert.equal(normalizePublicText('20 – 200 people'), '20 to 200 people');
  assert.equal(normalizePublicText('2026-10-17, on-site, API_ENDPOINT'), '2026-10-17, on-site, API_ENDPOINT');
});

test('named and numeric dash entities follow the same presentation rule', () => {
  for (const entity of ['&mdash;', '&ndash;', '&#8212;', '&#8211;', '&#x2014;', '&#x2013;', '&amp;mdash;']) {
    assert.equal(normalizePublicText(`One ${entity} two`), 'One, two');
  }
});

test('role Markdown normalizes headings, body, lists and link labels while preserving targets', () => {
  const url = 'https://example.com/senior–engineer?from=2026-10-17';
  const source = `# Engineering — Product\n\nBuild software &mdash; with care.\n\n- USD 100,000–150,000\n- [Role — details](${url})`;
  const html = renderMarkdown(source);
  assert.match(html, /<h1>Engineering, Product<\/h1>/);
  assert.match(html, /Build software, with care/);
  assert.match(html, /USD 100,000 to 150,000/);
  assert.match(html, /Role, details<\/a>/);
  assert.ok(html.includes(`href="${url}"`));
  assert.ok(source.includes('Engineering — Product'));
});

test('normalizing punctuation never permits source HTML or unsafe links', () => {
  const html = renderMarkdown('<img src=x onerror=alert(1)> — [Go — now](javascript:alert)');
  assert.ok(!html.includes('<img'));
  assert.ok(!html.includes('href="javascript:'));
  assert.ok(html.includes('&lt;img'));
  assert.ok(html.includes('Go, now'));
});

test('code and URL literals retain their meaning', () => {
  const html = renderMarkdown('Read `key—value` and https://example.com/a–b. Then read — carefully.');
  assert.ok(html.includes('<code>key—value</code>'));
  assert.ok(html.includes('https://example.com/a–b.'));
  assert.ok(html.includes('Then read, carefully.'));
});
