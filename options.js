var colors = require('colors');
var emoji = require('node-emoji');
var fs = require('fs');
var inquirer = require('inquirer')
var ncp = require("copy-paste");
var opener = require('opener');

var option = process.argv.slice(2);

if (option.length) {
    var base = fs.readFileSync(__dirname + '/options/base.css', 'utf8');
    var css = fs.readFileSync(__dirname + '/options/' + option + '.css', 'utf8');
    ncp.copy(base + css);

    console.log("CSS copied to clipboard " + emoji.get('smiley'));

    // TO-D0 File Not Found [Sad Smiley]
} else {
    inquirer.prompt([{
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            'Open the webpage to select the hamburger ' + emoji.get('hamburger'),
            'Know thy option ' + emoji.get('sunglasses')
        ]
    }, ]).then(function(answers) {
        if (answers.option == "Open the webpage to select the hamburger 🍔") {
            opener('http://chetanraj.in/hamburgers-options');
        }
    });
}
