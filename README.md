# unocss-bug-persistent-caching

This is a minimal reproduction of a bug with `@unocss/webpack` and Webpack persistent caching.

## Reproduction Steps

1. Install dependencies with `yarn`
2. Perform a production build with `yarn build`
3. Observe the built `dist/main.css` or view the rendered content with `yarn serve`. unocss classes should be correctly generated and applied properly.
4. Perform another production build (should be faster due to persistent caching)
5. Observe the built CSS. It should contain normal imported CSS rules but (incorrectly) not any unocss classes.
