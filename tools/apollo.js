const shell = require('shelljs')

module.exports = function apollo(path) {
    shell.cd(path)
    console.log("Init Goat is creating Apollo Server at location: " + shell.pwd().stdout )
    shell.exec('git clone https://github.com/init-goat/apollo')
    console.log("Completed\n")
    console.log("Server workspace: " + shell.pwd().stdout + "\\apollo\n\n")
}