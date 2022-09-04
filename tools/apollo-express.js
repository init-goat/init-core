const shell = require('shelljs')

module.exports = function apolloExpress(path, mongodb) {
    shell.cd(path)
    if (mongodb){
        console.log("Init Goat is creating Apollo Server + Express + MongoDB Connector at location: " 
        + shell.pwd().stdout )
        shell.exec('git clone --branch mongodb https://github.com/init-goat/apollo-express')
    }else{
        console.log("Init Goat is creating Apollo Server + Express at location: " + shell.pwd().stdout )
        shell.exec('git clone https://github.com/init-goat/apollo-express')
    }
    console.log("Completed\n")
    console.log("Server workspace: " + shell.pwd().stdout + "\\apollo-express\n\n")
}