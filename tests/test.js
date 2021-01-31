const tap = require('tape');
const { exec } = require('child_process');
const filename = 'cliprog';
const bin = `/usr/bin/node ./tests/project/${filename}.js`;

tap.test('exec cli tools', (t) => {
    const cmd = `${bin}`;
    const env = {
        DEBUG:`${filename}`
    };
    exec(cmd, env, (err, stdout, stderr) => {
        const testedLine = stderr.replace(/^[^ ]+ /, '').trim();
        const expectLine = `myproject:${filename} debugMessage myAttribute`;
        t.equal(testedLine, expectLine, `should display ${expectLine}`);
        t.end();
    });
});