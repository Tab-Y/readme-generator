// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
        validate: (value) => {
            value ? true : 'Please provide Title.'
        },
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
        choices: ['none', 'MIT', ], // add more choices here for license
    },
    {
        type: 'input',
        message: 'Who helped create this project through contribution?',
        name: 'contibuting',
    },
    {
        type: 'checkbox',
        message: 'What tests have been performed on this project? select all that apply',
        name: 'tests',
        choices: ['alpha', 'beta', 'network', 'console log', 'error testing', 'bug testing']
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'username',
        validate: (value) => {
            value ? true : 'Please provide GitHub Username.'
        },
    },
    {
        type: 'input',
        message: 'What is a good email to be reached at?',
        name: 'email',
        validate: (value) => {
            value ? true : 'Please provide Email.'
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README