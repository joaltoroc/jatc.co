import { defineConfig, passthroughImageService } from 'astro/config';
import compression from 'vite-plugin-compression';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  image: {
    service: passthroughImageService()
  },
  vite: {
    plugins: [compression()]
  }
});
