import { defineConfig } from 'astro/config';
import compression from 'vite-plugin-compression';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://jatc.co',
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
        ...[
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'Claude-SearchBot',
          'CCBot',
          'Google-Extended',
          'Google-CloudVertexBot',
          'Facebookbot',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'Applebot-Extended',
          'PerplexityBot',
          'Perplexity-User',
          'Bytespider',
          'Diffbot',
          'ImagesiftBot',
          'Omgilibot',
          'TikTokSpider',
          'Amazonbot',
          'Youbot',
        ].map((agent) => ({
          userAgent: agent,
          allow: ['/llms.txt', '/llm.txt'],
          disallow: '/',
        })),
      ],
    }),
  ],

  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    },
    plugins: [
      compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      })
    ]
  }
});
