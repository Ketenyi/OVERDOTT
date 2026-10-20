import type { APIRoute } from 'astro';
import { siteUrl } from '../config';

export const GET: APIRoute = () => new Response(
  `User-agent: *\nAllow: /\nDisallow: /contact/success/\nSitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);