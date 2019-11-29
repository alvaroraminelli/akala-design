const path = require('path');

const root = path.resolve(__dirname);
const PATHS = {
  root,
  src: path.join(root, 'src'),
  test: path.join(root, 'test'),
  out: path.join(root, 'lib'),
  coverage: path.join(root, 'coverage'),
  nodeModules: path.join(root, 'node_modules'),
  packages: path.join(root, 'packages')
};

PATHS.index = path.join(PATHS.src, 'index.ts');

module.exports = PATHS;
