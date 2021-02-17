const process = require('child_process')

let cmd = `find . -name "node_modules" -type d -prune -exec rm -rf '{}' +`
// let cmd = `find . -name "node_modules" -type d -prune | xargs du -chs +`

console.info('Running... remove-all-node-modules.js')
try {
    process.execSync(cmd, {
        stdio: 'inherit'
    })
} catch (e) {
    console.error(`RUNNING COMMAND: ${cmd} FAILED`)
}
