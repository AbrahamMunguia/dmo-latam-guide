import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://AbrahamMunguia.github.io',
  base: '/dmo-latam-guide',
  integrations: [tailwind()],
});