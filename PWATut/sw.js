self.addEventListener('install', function (event) {
    console.log("SW Installed");
    event.waitUntil(caches.open("static").then(function (cache) {
        cache.addAll([
            './',
            './index.html',
            './app.js',
            './style.css',
            './img/pwa-engaging.png',
            './img/pwa-fast.png',
            './img/pwa-reliable.png'
        ]);
    }).catch(err => console.error(err)));
});

self.addEventListener('activate', function () {
    console.log("SW Activated");
});

self.addEventListener('fetch', function (event) {
    console.log("SW Fetched");
    event.respondWith(
        caches.match(event.request).then(function (res) {
            if (res) {
                return res;
            }
            else {
                console.log(event.request)
                return fetch(event.request);
            }
        }).catch(err => console.error(err))
    );
});
