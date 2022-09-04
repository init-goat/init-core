#! /usr/bin/env node

const argv = require('yargs')
const version = require('./package.json').version

const react = require('./tools/react')
const apollo = require('./tools/apollo')
const apolloExpress = require('./tools/apollo-express')

console.log("\nInit Goat Starts!\n")

argv.scriptName("init-goat")
    .alias('h', 'help')
    .help('help')
    .usage('Usage: $0 <tools> [options]')
    .showHelpOnFail(true, "Specify --help for available options")
    .alias('v', 'version')
    .version(version)
    .describe('v', 'show version information')
    .command({
        command: "react",
        describe: "Initialize React Webapp",
        demandOption: true,
        builder: {
            path: {
                alias: "p",
                describe: "Path to create the React Webapp",
                demandOption: false,
                type: "String",
                default: "./",
                nargs: 1
            }
        },
        handler(argv) {
            react(argv.path)
        }
    }).command({
        command: "apollo-express",
        describe: "Initialize Apollo Server with Express",
        demandOption: true,
        builder: {
            path: {
                alias: "p",
                describe: "Path to create the Apollo Server with Express",
                demandOption: false,
                type: "String",
                default: "./",
                nargs: 1
            }
        },
        handler(argv) {
            apolloExpress(argv.path)
        }
    }).strict().argv
