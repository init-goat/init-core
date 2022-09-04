const shell = require('shelljs')

module.exports = function react(path) {
    shell.cd(path)
    console.log("Init Goat is creating React webapp at location: " + shell.pwd().stdout )
    shell.exec('git clone https://github.com/init-goat/react')
    console.log("Completed\n")
    console.log("Webapp workspace: " + shell.pwd().stdout + "\\react\n\n")
}