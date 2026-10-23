// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFile, writeFile } from 'node:fs/promises';

const site = 'https://purrfecthire.com';
// GitHub Pages serves these as HTTP 200 HTML redirects, not server 301s.
// Keep one map for Astro's redirect output and its document canonicals.
const legacyRedirects = {
    // Commercial pages that moved
    '/for-founders': '/for-companies/',
    '/kate': '/#kate',
    // Pricing is gone as a page: the B2B models live on For Companies, the
    // Offer price on Offer, the session price on For Talent. Home lets the
    // visitor pick a journey first.
    '/pricing': '/',
    // Former career products land on their current equivalent or selector.
    '/career-sessions': '/for-talent/#ways-in',
    '/career-momentum': '/career-compounding/',
    '/momentum': '/career-compounding/',
    // Offer Accelerator
    '/oa': '/offer-acceleration/',
    // The former long form lands on the current short application; other
    // campaign entry pages land on the product instead of reviving old copy.
    '/offer-acceleration/preguntas': '/offer-acceleration/apply/',
    '/offer-acceleration/te-suena': '/offer-acceleration/',
    '/offer-acceleration/espejo': '/offer-acceleration/',
    // Spanish: the site is English only.
    '/es': '/',
    '/es/kate': '/#kate',
    '/es/pricing': '/',
    '/es/career-sessions': '/for-talent/#ways-in',
    '/es/career-momentum': '/career-compounding/',
    '/es/privacy-policy': '/privacy-policy/',
};

/** @type {import('astro').AstroIntegration} */
const legacyDocumentCanonicals = {
  name: 'legacy-document-canonicals',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      for (const [source, target] of Object.entries(legacyRedirects)) {
        const canonical = new URL(target, site);
        if (!canonical.hash) continue;
        canonical.hash = '';
        const file = new URL(`${source.replace(/^\/+|\/+$/g, '')}/index.html`, dir);
        const html = await readFile(file, 'utf8');
        const updated = html.replace(/(<link rel="canonical" href=")[^"]+("\s*\/?>)/,
          (_match, before, after) => `${before}${canonical.href}${after}`);
        if (!updated.includes(`<link rel="canonical" href="${canonical.href}"`)) {
          throw new Error(`Missing canonical in legacy redirect ${source}`);
        }
        if (updated !== html) await writeFile(file, updated);
      }
    },
  },
};

export default defineConfig({
  site,
  redirects: legacyRedirects,
  integrations: [
    sitemap({
      // Commercial pages and live role details. Redirect stubs stay out.
      filter: (page) =>
        /\/(for-companies|for-talent|offer-acceleration(?:\/apply)?|career-compounding|for-investors|search-calibration|candidate-brief-sample|privacy-policy|work-with-us)\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/search\/(founding-engineer|head-of-engineering|forward-deployed-engineer)\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/roles(?:\/[^/]+)?\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/insights(?:\/[^/]+)?\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/$/.test(page),
    }),
    legacyDocumentCanonicals,
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
