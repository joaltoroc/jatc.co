import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';

describe('Repository Version & Security Synchronization', () => {
  const rootDir = process.cwd();
  const pkg = JSON.parse(
    fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8')
  );
  const projectVersion: string = pkg.version;
  const astroVersion: string = pkg.dependencies.astro;
  const pnpmVersion: string = pkg.packageManager.replace('pnpm@', '');

  it('should keep project version synchronized across Hero, Layout, and Service Worker', () => {
    const heroContent = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'Hero.astro'),
      'utf-8'
    );
    const layoutContent = fs.readFileSync(
      path.join(rootDir, 'src', 'layouts', 'Layout.astro'),
      'utf-8'
    );
    const swContent = fs.readFileSync(
      path.join(rootDir, 'public', 'sw.js'),
      'utf-8'
    );
    const changelogContent = fs.readFileSync(
      path.join(rootDir, 'CHANGELOG.md'),
      'utf-8'
    );

    expect(heroContent).toContain(
      `JATC Portfolio v${projectVersion} (Astro ${astroVersion} + TypeScript)`
    );
    expect(layoutContent).toContain(`?v=${projectVersion}`);
    expect(swContent).toContain(`jatc-portfolio-v${projectVersion}`);
    expect(changelogContent).toContain(`## [${projectVersion}]`);
  });

  it('should keep pnpm and Astro versions synchronized across documentation', () => {
    const readmeContent = fs.readFileSync(
      path.join(rootDir, 'README.md'),
      'utf-8'
    );
    const contextContent = fs.readFileSync(
      path.join(rootDir, 'context.md'),
      'utf-8'
    );
    const adrContent = fs.readFileSync(path.join(rootDir, 'ADR.md'), 'utf-8');

    expect(readmeContent).toContain(`pnpm (v${pnpmVersion})`);
    expect(contextContent).toContain(`\`pnpm\` (v${pnpmVersion})`);
    expect(adrContent).toContain(`pnpm (v${pnpmVersion})`);

    expect(readmeContent).toContain(`Astro (v${astroVersion})`);
    expect(contextContent).toContain(`(v${astroVersion})`);
    expect(adrContent).toContain(`Astro (v${astroVersion})`);
  });

  it('should keep CSP script-src hashes in .htaccess synchronized with built HTML when dist exists', () => {
    const distFiles = [
      path.join(rootDir, 'dist', 'index.html'),
      path.join(rootDir, 'dist', 'en', 'index.html'),
      path.join(rootDir, 'dist', '404.html'),
    ];

    if (!distFiles.every((file) => fs.existsSync(file))) {
      return;
    }

    const expectedHashes = new Set<string>();
    const scriptRegex =
      /<script(?![^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi;

    for (const file of distFiles) {
      const html = fs.readFileSync(file, 'utf-8');
      for (const match of html.matchAll(scriptRegex)) {
        if (match[1]) {
          const hash = crypto
            .createHash('sha256')
            .update(match[1])
            .digest('base64');
          expectedHashes.add(`sha256-${hash}`);
        }
      }
    }

    const htaccess = fs.readFileSync(
      path.join(rootDir, 'public', '.htaccess'),
      'utf-8'
    );
    const htaccessHashes = [
      ...htaccess.matchAll(/'(sha256-[A-Za-z0-9+/=]+)'/g),
    ].map((m) => m[1]);

    expect([...htaccessHashes].sort()).toEqual([...expectedHashes].sort());
  });
});
