const CACHE_NAME = 'arus-app-v2'; // Naik versi agar HP pengunjung me-refresh tampilan!
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/register.html',
  '/dashboard.html',
  '/style.css',
  '/app.js',
  '/logo.png', // Pastikan ekstensi sesuai dengan filemu (png/jpg)
  '/icon-512.jpg' // Pastikan ekstensi sesuai dengan filemu
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Memaksa service worker baru langsung aktif
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// MENGHAPUS CACHE VERSI LAMA (Sangat Penting!)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
