const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = require('util').promisify(fs.writeFile);

// array of questions for user
const questions = [

        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a short description of your project:',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'How do you install your project?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How do you use your project?',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose a license for your project:',
          choices: ['MIT', 'Apache 2.0', 'ISC', 'None'],
        },
        {
          type: 'input',
          name: 'contributors',
          message: 'List any contributors',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'How do you run tests for your project?',
        },
        {
          type: 'input',
          name: 'githubUsername',
          message: 'Enter your github username',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your email address?',
        },
];

// function to initialize program
function init() {

 inquirer.prompt(questions)
  .then((answers) => writeFileAsync('readme.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote README file'))
  .catch((err) => console.error(err));
}

// function call to initialize program
init();
