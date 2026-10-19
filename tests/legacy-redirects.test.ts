import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
const block = config.split('const legacyRedirects = {')[1].split('\n};')[0];
const entries = [...block.matchAll(/^\s+'([^']+)': '([^']+)'/gm)]
  .map((match) => [match[1], match[2]] as const);
const redirects = new Map(entries);

test('legacy career products and the former OA form keep their intended destination', () => {
  for (const route of ['/career-momentum', '/momentum', '/es/career-momentum']) {
    assert.equal(redirects.get(route), '/career-compounding/');
  }
  for (const route of ['/career-sessions', '/es/career-sessions']) {
    assert.equal(redirects.get(route), '/for-talent/#ways-in');
  }
  assert.equal(redirects.get('/offer-acceleration/preguntas'), '/offer-acceleration/apply/');
  assert.equal(redirects.get('/for-founders'), '/for-companies/');
});

test('redirect targets use final same-site paths and do not chain through another alias', () => {
  assert.equal(entries.length, redirects.size, 'duplicate legacy route');
  for (const [source, target] of entries) {
    assert.ok(target.startsWith('/') && !target.startsWith('//'), source);
    const path = target.split('#')[0];
    assert.ok(path.endsWith('/'), `${source} target needs its canonical trailing slash`);
    assert.ok(!redirects.has(path.replace(/\/$/, '')), `${source} chains through another alias`);
  }
});

test('withdrawn experiments are not revived as unrelated homepage redirects', () => {
  for (const route of ['/1', '/6', '/home-v2', '/companies-v2', '/talent-v2', '/offer-v2',
    '/app', '/app/roles', '/oa/payment/123', '/jorge/1', '/offer-acceleration/1', '/roles/1']) {
    assert.ok(!redirects.has(route), route);
  }
});
