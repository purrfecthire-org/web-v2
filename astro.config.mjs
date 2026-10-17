// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://purrfecthire.com',
  // Every URL the previous site handed out lands on its nearest equivalent.
  // GitHub Pages serves no server redirects, so Astro emits a small HTML page
  // per entry with a meta refresh and a canonical link. Nothing 404s silently.
  redirects: {
    // Commercial pages that moved
    '/for-founders': '/for-companies',
    '/kate': '/#kate',
    // Pricing is gone as a page: the B2B models live on For Companies, the
    // Offer price on Offer, the session price on For Talent. Home lets the
    // visitor pick a journey first.
    '/pricing': '/',
    // Talent routes that the launch does not carry
    '/career-sessions': '/for-talent',
    '/career-momentum': '/for-talent',
    '/momentum': '/for-talent',
    // Offer Accelerator
    '/oa': '/offer-acceleration',
    // The long application form is withdrawn: with no backend configured it
    // showed applicants an accepted screen and sent the application nowhere.
    '/offer-acceleration/preguntas': '/offer-acceleration',
    '/offer-acceleration/te-suena': '/offer-acceleration',
    '/offer-acceleration/espejo': '/offer-acceleration',
    // Spanish: the site is English only.
    '/es': '/',
    '/es/kate': '/#kate',
    '/es/pricing': '/',
    '/es/career-sessions': '/for-talent',
    '/es/career-momentum': '/for-talent',
    '/es/privacy-policy': '/privacy-policy',
  },
  integrations: [
    sitemap({
      // Commercial pages and live role details. Redirect stubs stay out.
      filter: (page) =>
        /\/(for-companies|for-talent|offer-acceleration(?:\/apply)?|career-compounding|for-investors|search-read|search-calibration|candidate-brief-sample|privacy-policy|work-with-us)\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/search\/(founding-engineer|head-of-engineering|forward-deployed-engineer)\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/roles(?:\/[^/]+)?\/?$/.test(page) ||
        /^https:\/\/purrfecthire\.com\/$/.test(page),
    }),
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
