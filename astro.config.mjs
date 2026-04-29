import { defineConfig, passthroughImageService } from 'astro/config';
import compression from 'vite-plugin-compression';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://jatc.co',
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
          en: 'en-US',
        },
      },
    }),
    robotsTxt({
      sitemap: 'https://jatc.co/sitemap-index.xml',
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ],
  image: {
    service: passthroughImageService()
  },
  vite: {
    plugins: [compression()]
  }
});
