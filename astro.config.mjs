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
      // Design-test versions stay out of the sitemap until one is chosen
      filter: (page) =>
        !/\/offer-acceleration\/\d+\/?$/.test(page) &&
        !/\/jorge\/\d+\/?$/.test(page) &&
        !/\/offer-acceleration\/apply\/?$/.test(page) &&
        !page.includes('/oa/payment/') &&
        // Legacy numbered home tests (/1…/6 and /es/6) — V6 is the default home now
        !/^https?:\/\/[^/]+\/(?:es\/)?\d+\/?$/.test(page) &&
        // Role-detail design variants (/roles/1,2,3) — only the /roles index is canonical
        !/\/roles\/\d+\/?$/.test(page),
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