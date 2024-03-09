/// Runtime encapsulates checks for the existence of browser methods
/// relevant to PWA apps.
export class Runtime {
    hasPWA() {
        return 'onbeforeinstallprompt' in window;
    }

    isPWA() {
        return ('matchMedia' in window) ? window.matchMedia('(display-mode: standalone)').matches : false;
    }

    hasGeolocation() {
        return 'geolocation' in navigator;
    }

    hasCaches() {
        return 'caches' in window;
    }

    hasLocalStorage() {
        return 'localStorage' in window;
    }

    hasIndexedDB() {
        return 'indexedDB' in window;
    }

    hasServiceWorker() {
        return 'serviceWorker' in navigator;
    }

    registerServiceWorker(js) {
        if (js !== undefined && this.hasServiceWorker()) {
            navigator.serviceWorker.register(js, { type: 'module' }).then((registration) => {
                console.log(registration);
            });
        }
        return 'ok';
    }

    isOnline() {
        return navigator.onLine;
    }

    userAgent() {
        return navigator.userAgent;
    }

    methodNames(cls) {
        var result = Object.getOwnPropertyNames(cls.prototype).splice(1);
        // remove the constructor and method (methodNames) if present
        result.pop(result.indexOf("constructor"));
        result.pop(result.indexOf("methodNames"));
        return result;
    }
}
