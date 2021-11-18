const inquirer = require('inquirer');


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
        {
            type: 'input',
            name: 'credits',
            message: 'Please list your collaborators, if any, with links to their Github profiles.',

        },
        // refer to docs on license dropdown selection
    ])
}







// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
