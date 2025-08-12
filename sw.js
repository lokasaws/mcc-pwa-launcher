self.addEventListener('install', event => {
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', event => {
    // No caching behavior needed
  });
  