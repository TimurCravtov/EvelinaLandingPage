import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://timurcravtov.github.io/EvelinaLandingPage',
  base: '/EvelinaLandingPage',
});