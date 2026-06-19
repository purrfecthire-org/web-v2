// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://purrfecthire.com',
  redirects: {
    // Short link for the Offer Acceleration program
    '/oa': '/offer-acceleration',
  },
  integrations: [
    sitemap({
      // The short-link redirect and the views that aren't public yet stay out
      // of the sitemap. Public pages (home, for-founders, for-talent,
      // offer-acceleration, privacy-policy) are included by default.
      filter: (page) =>
        !/\/oa\/?$/.test(page) &&                         // /oa short-link redirect
        !page.includes('/oa/payment/') &&                 // payment view (not enabled yet)
        !/\/offer-acceleration\/apply\/?$/.test(page) &&  // OA application (not enabled yet)
        !/\/roles\/?$/.test(page) &&                      // open-roles index (not enabled yet)
        !/\/roles\/\d+\/?$/.test(page),                   // role detail (not enabled yet)
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