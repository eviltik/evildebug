# evildebug

<!-- ![Node.js CI](https://github.com/eviltik/pinary/workflows/Node.js%20CI/badge.svg) -->
[![npm version](https://badge.fury.io/js/evildebug.svg)](https://badge.fury.io/js/evildebug)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Dependency Status](https://david-dm.org/eviltik/evildebug.svg)](https://david-dm.org/eviltik/evildebug)

Nodejs lazy debug module based on Holowaychuk debug module
-------------------------------------------------------------

## Installation

```bash
$ npm install evildebug
```

## Motivations

I like to have the project name followed by the current filename by default (without file extension)


Example code using native debug module 
------------------------------------

```js run.js
process.env.DEBUG = '*';
const pkg = require('./package.json');
const path = require('path');
const debug = require('debug')(`${pkg.name}:${path.basename(__filename).replace(/\.js$/, '')}`);
debug('foo');
```
will output 
```bash
  myproject:run foo +0ms
```

Example code using evildebug module
--------------------------------------
```js run.js
process.env.DEBUG = '*';
const debug = require('evildebug');
debug('foo');
```
will output 
```bash
  myproject:run foo +0ms
```
