# dreamIT Challenge

This challenge contains a basic Vue 3 + Vite App. I am using vitest along vue-testing-library to test the components (not all of them, just showcase).
For building components I've decided to use Naive UI, as well as basic HTML/CSS/SCSS.

## Proxy setup

Before running the application you have to execute the following:

```sh
npm run proxy
```

The local-cors-proxy package wasn't working properly, so I've decided to use cors-anywhere instead. It should not change the flow of the application in any way.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/) and [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)

```sh
npm run test
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Thank you for considering my application. I'd love to hear your feedback! :)

Tom
