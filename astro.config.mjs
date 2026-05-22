import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://baklavaclubdemar.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
