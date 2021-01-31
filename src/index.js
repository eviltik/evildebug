const path = require('path');

const d = (function fn() {
    const projectPath = require.main.path || (process.mainModule && process.mainModule.path);
    const projectName = require(path.resolve(projectPath, 'package.json')).name;
    const fileName = path.basename(require.main.filename).replace(/\.js.?$/, '');
    const debug = require('debug')(`${projectName}:${fileName}`);
    return debug;
})();

module.exports = d;
