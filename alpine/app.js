export class App {
    getMessage() {
        return (Math.random() > .5) ? "<h1>Good morning </h1>" : "<h1>Good evening</h1>";
    }
}

// Add the App module to the window context
window.app = {
    message: "",
    demo: new App()
};
