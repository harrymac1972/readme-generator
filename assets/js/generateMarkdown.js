
const licenseObj = require('./license');
const fs = require('fs');
var licenseBadgeStr = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  return licenseObj[license]["badge"] + "\n\n";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
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
    licenseBadgeStr = renderLicenseBadge(data.license);
    fs.writeFile('../../LICENSE.txt',licenseObj[data.license]["text"], (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("\noutputREADME.md created in 'output' folder.")
      }
    });
  }
  // Create actual file
  const baseStr = licenseBadgeStr + mainStr;
  fs.writeFile('output/outputREADME.md', baseStr, (err) => {
    if (err) {
      console.error(err);
    }
  });
  return mainStr;
}

module.exports = generateMarkdown;
