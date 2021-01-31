const path = require('path');

const d = (() => {
    const projectPath = require.main.path || (process.mainModule && process.mainModule.path);
    console.log('projectPath', projectPath);
    const projectName = require(path.resolve(projectPath, 'package.json')).name;
    const fileName = path.basename(require.main.filename).replace(/\.js.?$/, '');
    const debug = require('debug')(`${projectName}:${fileName}`);
    return debug;
})();

module.exports = d;
