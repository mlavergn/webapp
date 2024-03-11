# Web App

Web app resources for SPA reactive sites and PWAs that do not require JSX.

To power this base-case SPA, 3 frameworks were evaluated:

1) [Petite-Vue](https://github.com/vuejs/petite-vue)
2) [Alpine](https://github.com/alpinejs/alpine)
3) [Preact](https://github.com/preactjs/preact)

## Petite-Vue

Petite-Vue is well designed and has solid performance characteristics, but unfortunately the project appears to be abandoned. Petite-vue augments HTML inline. Petite-Vue's ESM implementation is 17KB in size and the project has 9K GitHub stars.

## Alpine

Alpine is similar to Petite-Vue but with binding based data management. Alpine augments HTML inline. Alpine's ESM implementation (non-minified) is 101KB in size and the project has 26K GitHub stars. After minifying the ESM implementation shrinks to 54KB.

## Preact

Preact is a React-alternative without the JSX pass. Preact is component based and does not augment existing HTML like the frameworks above. Preact's ESM implementation is 13KB in size and the project has 36K GitHub stars.

## Selection

Although I prefer Petite-Vue's simpler architecture, I selected Alpine due to it being an active project and it's augmented HTML approach.
