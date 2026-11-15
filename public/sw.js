const CACHE_NAME = 'sandbox-cache-v1';
const OFFLINE_URL = '/offline';

const PRECACHE_ASSETS = [
  '/',
  '/offline',
  '/about-us',
  '/services',
  '/portfolio',
  '/pricing',
  '/contact',
  '/faq',
  '/why-us',
  '/icon.png',
  '/manifest.json'
];

// Install Event - Pre-cache essential pages and assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline fallbacks and key pages');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Handle offline requests
self.addEventListener('fetch', (event) => {
  // Only handle GET requests and skip browser extensions/external APIs
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);

  // Skip API routes
  if (url.pathname.startsWith('/api')) {
    return;
  }

  // Caching Strategy:
  // - HTML pages (navigation requests): Network-first falling back to cache, then falling back to /offline
  // - Static assets (JS, CSS, images, fonts): Cache-first falling back to network
  if (event.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html') || !url.pathname.includes('.')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response and put it in cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If cache misses, return the offline fallback page
            return caches.match(OFFLINE_URL);
          });
        })
    );
  } else {
    // Cache-first for static assets
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          // Only cache successful requests
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});
