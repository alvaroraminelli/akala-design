import typescript from 'rollup-plugin-typescript';
const pkg = require('./package.json');
const PATHS = require('./paths');

export default {
  input: PATHS.index,
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'cjs', sourcemap: true }
  ],
  plugins: [
    typescript()
  ]
}
