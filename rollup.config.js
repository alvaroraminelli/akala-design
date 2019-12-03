import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const pkg = require('./package.json');
const PATHS = require('./paths');

const NODE_ENV = 'development';

export default {
  input: PATHS.index,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true }
  ],
  plugins: [
  //   replace({
  //     "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
  //   }),
    babel({
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from"
      ],
      exclude: "node_modules/**"
    })
  //   resolve(),
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


