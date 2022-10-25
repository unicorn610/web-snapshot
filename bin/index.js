#!/usr/bin/env node
const { version } = require('../package.json')
const { program } = require('commander')
const snapshot = require('../index')

program
    .name('web-snapshot')
    .description('CLI to web page snapshot')
    .version(version, '-v, --version', 'output the current version')

program
    .argument('<url>', "the web page's url which want to record")
    .option('-f, --fullPage', 'snapshot the full page')
    .option('-p, --path <path>', 'output picture path (ex: screenshot.png)')
    .option('-d, --debug', 'display some debugging')
    .action((url, options, command) => {
        if (options.debug) {
            console.log('Called %s with options %o', command.name(), options)
        }
        const { path, ...rest } = options
        snapshot(url, path, rest)
    })

program.parse()
