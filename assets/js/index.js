// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data);

    // compose Main String
    let mainStr = "";
    mainStr += "# " + data.title + "\n\n";
    mainStr += "## Description\n\n" + data.description + "\n\n";

    console.log(mainStr);
    fs.writeFile('../../README.md', mainStr, (err) => {
      if (err) {
        console.error(err);
      }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile(data);
    });
}

// Function call to initialize app
init();


