import Alpine from './modules/alpine.min.js'
import { Runtime } from "./modules/runtime.js";
import { PWA } from "./modules/pwa.js";

Alpine.data('app', () => ({
    version: '1.0',
    data: {},
    runtime: new Runtime(),
    init() {
        this.runtime.methodNames(Runtime).reduce((partial, fn) => {
            this.data[fn] = this.runtime[fn]();
        }, []);

        // Register the PWA service worker
        const runtime = new Runtime();
        runtime.registerServiceWorker("pwa.js");
    },
    reset() {
        caches.delete(PWA.cacheStorageKey)
    }
}));

Alpine.start();
