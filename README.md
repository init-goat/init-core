# Init Goat :goat:

Greatest Of All Time tool to Initialize your project!!!

## Description

Tired of initializing a project when you got a great idea? Don't know where to start when you are trying out a new technology? Init Goat is the only tool you need to initialize your project. Whether you are creating an React Web App or an Apollo Server Backend, Init Goat :goat: will initialize the project for you!

## Getting Started
### Dependencies

* shelljs
* yargs

### Installing
```
npm install init-goat
```

## Usage
### Initializing React Webapp
* Create project structure by typing the command
```
init-goat react [-p path]
```
* Code your React Webapp in ./src/App.js
* Edit the name of your project in ./package.json, ./public/manifest.json, and ./public/index.html


### Initialize Apollo Server with Express (with MongoDB option)
* Create Apollo Server with Express by typing the command
```
init-goat apollo-express [-p path]
```
* If you also want MongoDB option, use the command below
```
init-goat apollo-express -m [-p path]
```

## Help

```
init-goat -h
```

If you still need help, feel free to contact the author.

## Authors
* Clement

## Version History
* 0.1
    * Initial Release

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
