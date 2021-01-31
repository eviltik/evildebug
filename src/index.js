const path = require('path');
const semver = require('semver');

const d = (() => {
    let projectPath;
    if (semver.lt(process.version, '11.0.0')) {
        projectPath = process.mainModule.path;
    } else {
        projectPath = require.main.path;
    }
    projectPath = require.main.path || (process.mainModule && process.mainModule.path);
    process.stdout.write('projectPath='+projectPath);
    const projectName = require(path.resolve(projectPath, 'package.json')).name;
    const fileName = path.basename(require.main.filename).replace(/\.js.?$/, '');
    const debug = require('debug')(`${projectName}:${fileName}`);
    return debug;
})();

module.exports = d;
