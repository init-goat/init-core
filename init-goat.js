#! /usr/bin/env node

const shell = require('shelljs')
const yargs = require('yargs')

yargs.scriptName("init-goat")
.usage('$0 tool [path]')
.command('react [path]', 'Initialize React webapp', (yargs)=>{
    yargs.option('path', {
        type: "string",
        default: ".",
        describe: "Path to initialize the React webapp. A folder called will be \
        created at the indicated location"
    }), (argv) => {
        console.log("react")
    }
}).help().argv


// shell.exec('git clone https://github.com/init-goat/react')