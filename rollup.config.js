import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import external from "rollup-plugin-peer-deps-external";

const pkg = require('./package.json');
const PATHS = require('./paths');

export default {
  input: PATHS.index,
  output: [
    // { file: 'dist/index.amd.js', format: 'amd', sourcemap: false },
    // { file: 'dist/index.umd.js', format: 'umd', sourcemap: false, name: 'akaladesign' },
    // { file: 'dist/index.esm.js', format: 'esm', sourcemap: false },
    // { file: 'dist/index.iife.js', format: 'iife', sourcemap: false, name: 'akaladesign' },
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: false }
  ],
  plugins: [
  //   replace({
  //     "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
  //   }),
    babel({
      exclude: "node_modules/**"
    })
  //   external(), //specifying the libraries that should be treated as peer dependencies
  //   resolve(), // resolving third-party modules and including them in the bundle
  //   commonjs()
  //   commonjs({
  //     include: 'node_modules/**',
  //     // left-hand side can be an absolute path, a path
  //     // relative to the current directory, or the name
  //     // of a module in node_modules
  //     namedExports: {
  //       'node_modules/react/index.js': [
  //         'cloneElement',
  //         'createContext',
  //         'Component',
  //         'createElement',
  //         'isValidElement',
  //         'Children',
  //         'createRef'
  //       ],
  //       'node_modules/react-dom/index.js': ['render', 'hydrate'],
  //       'node_modules/react-is/index.js': [
  //         'isElement',
  //         'isValidElementType',
  //         'ForwardRef'
  //       ]
  //     }
  //   })
  ]
}


