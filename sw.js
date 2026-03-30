const CACHE_NAME = 'arus-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Gunakan versi cache jika ada
        }
        return fetch(event.request); // Ambil dari internet jika tidak ada di cache
      }
    )
  );
});