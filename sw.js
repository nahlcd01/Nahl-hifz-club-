/* NAHL Hifz Club service worker (v33 PWA).
   Strategy: NETWORK-FIRST for everything, cache only as an offline fallback,
   so app updates the owner uploads always show immediately when online.
   Cross-origin traffic (Firestore, Cloudinary, Google APIs, CDNs) is NEVER
   intercepted or cached — the sync engine talks to the network directly. */
var CACHE = 'nahl-shell-v1';
var SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png', '/an-nahl-logo.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).catch(function () {}));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // APIs & media: network only
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        if (hit) return hit;
        if (e.request.mode === 'navigate') return caches.match('/index.html');
      });
    })
  );
});
