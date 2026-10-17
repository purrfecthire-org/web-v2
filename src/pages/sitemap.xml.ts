// Compatibility URL for crawlers and tools expecting /sitemap.xml.
// @astrojs/sitemap remains the source of the canonical URL list.
export const prerender = true;
export function GET() {
  return new Response('<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://purrfecthire.com/sitemap-0.xml</loc></sitemap></sitemapindex>', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
