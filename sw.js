// installing of serviceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sample').then(function(cache) {
      return cache.addAll([

      ]);
    })
  );
});

// fetching of data
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('sample').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// activating of serviceWorker
self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['sample2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
