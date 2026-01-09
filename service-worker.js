// service-worker.js

// Instala el Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  self.skipWaiting(); // activa inmediatamente
});

// Activa el Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});

// Intercepta las peticiones de red (sin cache, comportamiento transparente)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
