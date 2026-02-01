import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://stefanromeis.github.io/mier-immobilien/' : undefined,
  base: isProd ? '/mier-immobilien/' : '/',
  integrations: [react(), tailwind()],
  output: 'static',
});
