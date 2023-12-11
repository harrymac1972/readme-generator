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
  
  // set Title
  mainStr += "# " + data.title + "\n\n";

  // Description
  if (data.description.length > 0) {
    mainStr += "## Description\n\n" + data.description + "\n\n";
  }

  // Instructions
  if (data.instructions.length > 0) {
    mainStr += "## Instructions\n\n" + data.instructions + "\n\n";
  }

  // Usage Info
  if (data.usageInfo.length > 0) {
    mainStr += "## Usage Information\n\n" + data.usageInfo + "\n\n";
  }

  // Guidelines
  if (data.guidelines.length > 0) {
    mainStr += "## Guidelines\n\n" + data.guidelines + "\n\n";
  }

  // Testing
  if (data.testing.length > 0) {
    mainStr += "## Testing\n\n" + data.testing + "\n\n";
  }

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


