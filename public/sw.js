// Service Worker for JATC Portfolio PWA Offline Support
const CACHE_NAME = 'jatc-portfolio-v1';
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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch background update
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse.status === 200) {
              caches
                .open(CACHE_NAME)
                .then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          return networkResponse;
        })
        .catch(() => {
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/');
          }
        });
    })
  );
});
