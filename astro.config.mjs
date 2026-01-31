import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://stefanromeis.github.io/mier-immobilien/',
  base: '/mier-immobilien/',
  integrations: [react(), tailwind()],
  output: 'static',
});
