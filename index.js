const inquirer = require('inquirer');
// const fs = require('fs');
const generateMd = require('./src/generateMarkdown.js');

const generateFile = require('./utils/generateFile.js');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmToC',
            message: 'Would you like a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions on installation',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please provide installations instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please provide usage instructions or examples!');
                    return false;
                }
            }
        },
        // {
        //     type: 'input',
        //     name: 'credits',
        //     message: 'Please list your collaborators, if any, with links to their Github profiles.',

        // },
        {
            type: 'list',
            name: 'licenses',
            message: 'Select which license covers your project',
            choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC']
        },
        {
            type: 'confirm',
            name: 'contribute',
            message: 'Would you like a custom contribution section?',
            default: false
            
        },
        {
            type: 'input',
            name: 'customContribute',
            message: 'Enter in guidelines for contributing',
            when: ({ contribute }) => {
                if (contribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instructions on testing your project',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('You must provide instructions on testing!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your Github username',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You must enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You must enter your email address!');
                    return false;
                }
            }
        }
    ]);
};



promptUser()
    .then(generateMd)
    .then(pageMD => {
        return generateFile(pageMD);
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });







// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
