const CACHE_NAME = 'document-xzy-v2';

const cachedResource = async req => {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(req);
  const url = new URL(req.url);
  let pathnameSplits = url.pathname.split('/');
  let fileName = pathnameSplits[pathnameSplits.length - 1];
  if (fileName !== 'index.html' && cachedResponse) {
    return cachedResponse;
  }
  let networkResponse = await fetch(req);
  if (networkResponse && networkResponse.status === 200 || networkResponse.type === 'basic') {
    //await cache.put(req, networkResponse.clone());
    return networkResponse;
  } else if (cachedResponse) {
    return cachedResponse;
  }
}

self.addEventListener('fetch', event => {
  event.respondWith(cachedResource(event.request));
})
