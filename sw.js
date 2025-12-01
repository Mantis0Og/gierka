
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      
      return cache.addAll(["./", "./indexx.html", "./style.css", "./script.js", "./img/*.png", "./music/*.mp3", "./music/*.wav"]);
    })
  );
});


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
