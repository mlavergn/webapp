import Alpine from 'https://unpkg.com/alpinejs/dist/module.esm.js'

Alpine.data('app', () => ({
    data: {
        message: "Hello"
    },
    getMessage() {
        return (Math.random() > .5) ? "<h1>Good morning </h1>" : "<h1>Good evening</h1>";
    },
    init() {
        console.log("init");
    },
    destroy() {
        console.log("init");
    },
}));

Alpine.start();
