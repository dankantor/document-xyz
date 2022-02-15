const CACHE_NAME = 'document-xzy-v2';

const fetchLatest = async req => {
  try {
    let networkResponse = await fetch(req);
    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(req, networkResponse.clone());
    }
    return networkResponse;
  } catch (err) {}
}

const cachedResource = async req => {
  const cachedResponse = await caches.match(req);
  if (cachedResponse) {
    fetchLatest(req);
    return cachedResponse;
  }
  return fetchLatest(req);
}

self.addEventListener('fetch', event => {
  event.respondWith(cachedResource(event.request));
})
