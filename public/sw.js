// Service Worker for JATC Portfolio PWA Offline Support
const CACHE_NAME = 'jatc-portfolio-v0.7.2';
const ASSETS_TO_CACHE = [
  '/',
  '/en/',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/site.webmanifest',
  '/jatc.png',
  '/jatc.webp',
];

async function precacheAssets() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(ASSETS_TO_CACHE);
  await self.skipWaiting();
}

async function cleanupOldCaches() {
  const keys = await caches.keys();
  const staleKeys = keys.filter((key) => key !== CACHE_NAME);
  await Promise.all(staleKeys.map((key) => caches.delete(key)));
  await self.clients.claim();
}

async function updateCacheInBackground(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse?.status === 200 && networkResponse.type === 'basic') {
      const responseToCache = networkResponse.clone();
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, responseToCache);
    }
  } catch {
    // Ignore background network errors while offline
  }
}

async function handleFetchRequest(event) {
  const { request } = event;
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    event.waitUntil(updateCacheInBackground(request));
    return cachedResponse;
  }

  try {
    return await fetch(request);
  } catch {
    if (request.headers.get('accept')?.includes('text/html')) {
      const fallbackResponse = await caches.match('/');
      if (fallbackResponse) return fallbackResponse;
    }
    return Response.error();
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAssets());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(cleanupOldCaches());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  let url;
  try {
    url = new URL(event.request.url);
  } catch {
    return;
  }

  // Strictly handle same-origin HTTP(S) requests only (prevents cross-origin cache poisoning)
  if (url.origin !== self.location.origin) return;

  event.respondWith(handleFetchRequest(event));
});
