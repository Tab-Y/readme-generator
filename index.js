// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description to include in this README?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What installation instructions need to be included for this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What usage information should be included for this project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which License are you using with this project?',
        name: 'license',
        choices: ['none', 'Academic Free License v3.0', 'Apache license 2.0', 'MIT', 'Microsoft Public License', 'Open Software License 3.0', 'Mozilla Public License 2.0', 'Creative Commons license family', 'Artistic License 2.0'], // add more choices here for license
    },
    {
        type: 'input',
        message: 'Who helped create this project through contribution?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are instructions to test this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is a good email to be reached at?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./assets/${fileName}`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README created')
        );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `README.md`;
            writeToFile(fileName, data);
        },
        )
};

// Function call to initialize app
init();
