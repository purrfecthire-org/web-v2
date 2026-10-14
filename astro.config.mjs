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
    '/roles': '/for-talent',
    // Offer Accelerator
    '/oa': '/offer-acceleration',
    // The long application form is withdrawn: with no backend configured it
    // showed applicants an accepted screen and sent the application nowhere.
    '/offer-acceleration/apply': '/offer-acceleration',
    '/offer-acceleration/preguntas': '/offer-acceleration',
    '/offer-acceleration/te-suena': '/offer-acceleration',
    '/offer-acceleration/espejo': '/offer-acceleration',
    // Spanish: the four launch pages are English. The privacy policy keeps
    // its Spanish version.
    '/es': '/',
    '/es/kate': '/#kate',
    '/es/pricing': '/',
    '/es/career-sessions': '/for-talent',
    '/es/career-momentum': '/for-talent',
  },
  integrations: [
    sitemap({
      // Six real pages: home, for-companies, for-talent, offer-acceleration
      // and the privacy policy in both languages. Redirect stubs are not
      // pages and never enter the sitemap.
      filter: (page) =>
        /\/(for-companies|for-talent|offer-acceleration|privacy-policy|es\/privacy-policy)\/?$/.test(page) ||
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