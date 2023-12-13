// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseObj = require('./license');


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
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
      ],
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

  // License
  if (data.license.length > 0) {
    mainStr += "## License\n\n";
    mainStr += data.license;
    mainStr += "\n\n Please read full license at 'LICENSE.txt' in this project";
    fs.writeFile('../../LICENSE.txt',licenseObj[data.license], (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

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


