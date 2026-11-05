import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
const block = config.split('const legacyRedirects = {')[1].split('\n};')[0];
const entries = [...block.matchAll(/^\s+'([^']+)': '([^']+)'/gm)]
  .map((match) => [match[1], match[2]] as const);
const redirects = new Map(entries);
const sharedApplication = 'https://purrfect-hire-apply.lovable.app/apply/offer-accelerator';
const externalApplicationEntries = new Set(['/offer-acceleration/apply', '/offer-acceleration/preguntas']);

test('legacy career products and the former OA form keep their intended destination', () => {
  for (const route of ['/career-momentum', '/momentum', '/es/career-momentum']) {
    assert.equal(redirects.get(route), '/career-compounding/');
  }
  for (const route of ['/career-sessions', '/es/career-sessions']) {
    assert.equal(redirects.get(route), '/for-talent/#ways-in');
  }
  assert.equal(redirects.get('/offer-acceleration/preguntas'), sharedApplication);
  assert.equal(redirects.get('/for-founders'), '/for-companies/');
});

test('redirect targets stay on site except the two approved shared-form entries, without alias chains', () => {
  assert.equal(entries.length, redirects.size, 'duplicate legacy route');
  for (const [source, target] of entries) {
    if (externalApplicationEntries.has(source)) {
      assert.equal(target, sharedApplication, source);
      continue;
    }
    assert.ok(target.startsWith('/') && !target.startsWith('//'), source);
    const path = target.split('#')[0];
    assert.ok(path.endsWith('/'), `${source} target needs its canonical trailing slash`);
    assert.ok(!redirects.has(path.replace(/\/$/, '')), `${source} chains through another alias`);
  }
});

test('the original OA URL is a shared form entry and cannot be shadowed by the former OA-only page', () => {
  assert.equal(redirects.get('/offer-acceleration/apply'), sharedApplication);
  assert.ok(!existsSync(new URL('../src/pages/offer-acceleration/apply.astro', import.meta.url)));
  const links = readFileSync(new URL('../src/content/links.ts', import.meta.url), 'utf8');
  const compounding = readFileSync(new URL('../src/content/careerCompoundingV2.ts', import.meta.url), 'utf8');
  assert.match(links, /export const APPLY_OFFER = '\/offer-acceleration\/apply'/);
  assert.match(compounding, /export const DISCUSS_CAREER_COMPOUNDING = APPLY_OFFER/);
  assert.ok(!compounding.includes('Opens a WhatsApp conversation.'));
  assert.match(links, /export const SESSION_1_1 =[\s\S]*?https:\/\/wa\.me\/18312245188/);
  assert.match(links, /export const WHATSAPP_B2B = 'https:\/\/wa\.me\/18312245188/);
});

test('withdrawn experiments are not revived as unrelated homepage redirects', () => {
  for (const route of ['/1', '/6', '/home-v2', '/companies-v2', '/talent-v2', '/offer-v2',
    '/app', '/app/roles', '/oa/payment/123', '/jorge/1', '/offer-acceleration/1', '/roles/1']) {
    assert.ok(!redirects.has(route), route);
  }
});
