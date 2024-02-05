// TODO: Include packages needed for this application

const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// test instructions
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Installation Instructions?',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Usage Information?',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Contribution Guidelines?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Test Instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License?',
      choices: ['Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'Boost Software License 1.0',
                'GNU Affero General Public License v3.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Your Github Username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Your Email Address?',
    },
];

// TODO: Create a function to write README file
function createFile(data) {
    return generateMarkdown(data);
}

// ===================================================

// TODO: Create a function to initialize app
function init() {    
    console.log("\n");
    inquirer
    .prompt(questions)
    .then((data) => {
        createFile(data);
    });
}

// Function call to initialize app
init();


