import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://overdott.example',
  output: 'static',
  vite: {
    build: {
      sourcemap: false,
    },
  },
});