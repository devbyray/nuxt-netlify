// var cacheName = 'mfdPWA-v1';
// var filesToCache = [
//   '/**/*.css',
//   '/**/*.js',
//   /* ...and other assets (jQuery, Materialize, fonts, etc) */
// ];

// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });

self.addEventListener( "fetch" , function (event) {
  //fetch request as specified by event object
  console.log(event.request); //Note that Request and Response are also objects
});
