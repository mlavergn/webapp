import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

class PWA {
    supportsPWA() {
        return 'onbeforeinstallprompt' in window;
        // return typeof window.onbeforeinstallprompt == 'object';
    }

    runtimePWA() {
        if ('matchMedia' in window) {
            return window.matchMedia('(display-mode: standalone)').matches;
        }
        return false;
    }
}

const pwa = new PWA();

const app = reactive({
    data: {
        supportsPWA: pwa.supportsPWA(),
        runtimePWA: pwa.runtimePWA()
    }
});

createApp({ app }).mount("#model");

