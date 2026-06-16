const CACHE_NAME = 'pwa-test-cache-v1';

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

// Fetch Service Worker (Wajib ada untuk syarat PWA)
self.addEventListener('fetch', (event) => {
  // Biarkan request lewat begitu saja untuk testing
  event.respondWith(fetch(event.request));
});