import type { APIRoute } from 'astro';
import { insights } from '../data/insights';
import { services } from '../data/services';
import { siteUrl } from '../config';

const staticPaths = ['/', '/services/', '/about/', '/solutions/', '/digital-services/', '/products/', '/velldot/', '/insights/', '/contact/', '/privacy/'];

export const GET: APIRoute = () => {
  const origin = siteUrl.replace(/\/$/, '');
  const paths = [
    ...staticPaths,
    ...services.map((service) => `/services/${service.slug}/`),
    ...insights.map((article) => `/insights/${article.slug}/`),
  ];
  const urls = paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};