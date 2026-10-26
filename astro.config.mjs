import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import compression from 'vite-plugin-compression';
import sitemap from '@astrojs/sitemap';

/**
 * Native Astro integration to generate robots.txt at build time.
 *
 * @param {{ sitemap?: string | string[], policy?: Array<{ userAgent: string, allow?: string | string[], disallow?: string | string[] }> }} options
 * @returns {import('astro').AstroIntegration}
 */
function robotsTxt({ sitemap: sitemapUrl, policy = [] } = {}) {
  return {
    name: 'robots-txt',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const blocks = policy.map((rule) => {
          const lines = [`User-agent: ${rule.userAgent}`];
          const disallows = Array.isArray(rule.disallow)
            ? rule.disallow
            : rule.disallow
              ? [rule.disallow]
              : [];
          const allows = Array.isArray(rule.allow)
            ? rule.allow
            : rule.allow
              ? [rule.allow]
              : [];
          for (const item of disallows) {
            lines.push(`Disallow: ${encodeURI(String(item))}`);
          }
          for (const item of allows) {
            lines.push(`Allow: ${encodeURI(String(item))}`);
          }
          return lines.join('\n');
        });

        let content = `${blocks.join('\n\n')}\n`;
        if (sitemapUrl) {
          const sitemaps = Array.isArray(sitemapUrl)
            ? sitemapUrl
            : [sitemapUrl];
          for (const url of sitemaps) {
            content += `Sitemap: ${url}\n`;
          }
        }

        fs.writeFileSync(new URL('robots.txt', dir), content, 'utf-8');
        logger.info('`robots.txt` created at `dist`');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jatc.co',
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
      sitemap: 'https://www.jatc.co/sitemap-index.xml',
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
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
    plugins: [
      compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
    ],
  },
});
