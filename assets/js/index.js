// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseObj = require('./license');
var licenseBadgeStr = "";

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
];

// TODO: Create a function to write README file
function createFile(data) {

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
    licenseBadgeStr = licenseObj[data.license]["badge"] + "\n\n";
    fs.writeFile('../../LICENSE.txt',licenseObj[data.license]["text"], (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  // Create actual file
  const baseStr = licenseBadgeStr + mainStr;
  fs.writeFile('../../output/outputREADME.md', baseStr, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// ===================================================

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        createFile(data);
    });
}

// Function call to initialize app
init();


