const shell = require('shelljs')

module.exports = function apolloExpress(path) {
    shell.cd(path)
    console.log("Init Goat is creating Apollo Server with Express at location: " + shell.pwd().stdout )
    shell.exec('git clone https://github.com/init-goat/apollo-express')
    console.log("Completed\n")
    console.log("Server workspace: " + shell.pwd().stdout + "\\apollo-express\n\n")
}