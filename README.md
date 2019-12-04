# Install react typescript storybook

https://medium.com/@dandobusiness/setting-up-a-react-typescript-storybook-project-5e4e9f540568


# Install roolup
`npm i -D babel-core babel-plugin-external-helper babel-preset-latest babel-preset-react babel-preset-stage-1`
`npm i -D rollup rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-node-resolve`

import Button from './components/Button';

export {
  Button,
};

# Webpack vs Rollup
https://medium.com/jsdownunder/rollup-vs-webpack-javascript-bundling-in-2018-b35758a2268
https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd

- Rollup has node polyfills for import/export, whereas webpack doesn’t
- Rollup has support for relative paths, whereas webpack does not, so we either use path.resolve or path.join

## Tree Shaking

Tree shaking or dead code elimination means that unused modules will not be included in the bundle during the build process.
Utilizing the tree shaking and dead code elimination can significantly reduce the code size we have in our application.
