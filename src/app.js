import { createApp, reactive } from "https://unpkg.com/petite-vue?module";
import { Runtime } from "./runtime.js";
import { PWA } from "./pwa.js";

const app = reactive({
    version: '1.0',
    data: {},
    runtime: new Runtime(),
    async bootstrap() {
        this.runtime.methodNames(Runtime).reduce((partial, fn) => {
            this.data[fn] = this.runtime[fn]();
        }, []);
    },
    async reset() {
        caches.delete(PWA.cacheStorageKey)
    }
});

createApp({ app }).mount("#model");

// Bootstrap the vue data
app.bootstrap();

// Register the PWA service worker
app.runtime.registerServiceWorker("pwa.js");
