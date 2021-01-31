process.env.DEBUG = '*';

const pkg = require('./package.json');
const path = require('path');
const debug = require('debug')(`${pkg.name}:${path.basename(__filename).replace(/\.js$/, '')}`);

debug('foo');
