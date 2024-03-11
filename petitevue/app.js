import { createApp, reactive } from 'https://unpkg.com/petite-vue/dist/petite-vue.es.js'

const app = reactive({
    version: '1.0',
    data: {},
    async bootstrap() {
        this.data = {
            'Hello': 'World',
            'Foo': 'Bar'
        }
    },
});

createApp({ app }).mount("#model");

// Bootstrap the vue data
app.bootstrap();
