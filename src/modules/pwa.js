/// PWA encapsulates the methods defining a PWA
/// The JS file can be passed to a service worker
/// which will bootstrap a PWA environment.
export class PWA {
    static cacheStorageKey = 'pwa-demo';

    static cacheList = [
        '/',
        'pwa.html',
        'app.js',
        'pwa.js',
        'runtime.js',
        'icon.png',
        'screenshot.png'
    ];

    registerInstallHandler() {
        self.addEventListener('install', (e) => {
            console.log('Cache event!')
            e.waitUntil(
                caches.open(PWA.cacheStorageKey)
                    .then((cache) => {
                        console.log('Adding to Cache:', PWA.cacheList)
                        return cache.addAll(PWA.cacheList)
                    })
                    .then(() => {
                        console.log('Skip waiting!')
                        return self.skipWaiting()
                    })
            )
        });
    }

    registerActivateHandler() {
        self.addEventListener('activate', (e) => {
            console.log('Activate event')
            e.waitUntil(
                caches.keys()
                    .then(cacheNames => {
                        return cacheNames.map(name => {
                            if (name !== this.cacheStorageKey) {
                                return caches.delete(name);
                            }
                        })
                    })
                    .then(() => {
                        console.log('Clients claims.');
                        return self.clients.claim();
                    })
            )
        });
    }

    registerFetchHandler() {
        self.addEventListener('fetch', (e) => {
            console.log('Fetch event:', e.request.url)
            e.respondWith(
                caches.match(e.request)
                    .then((response) => {
                        if (response != undefined) {
                            console.log('Using cache for:', e.request.url);
                            return response;
                        }
                        console.log('Fallback to fetch:', e.request.url);
                        return fetch(e.request.url);
                    })
            );
        });
    }

    bootstrapServiceWorker() {
        self.console.log('Bootstrap PWA handlers');
        this.registerInstallHandler();
        this.registerActivateHandler();
        this.registerFetchHandler();
    }
}

// Limit bootstrap to service workers only
if ('window' in self == false) {
    const pwa = new PWA();
    pwa.bootstrapServiceWorker();
}
