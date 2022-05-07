// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None")
    return `![Github license](https://img.shields.io/badge/license-${licenseSelected}-blue.svg)`;
  else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `
    ${renderLicenseBadge}
    ${renderLicenseLink}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
    
  ## Description
  ${data.description}

  ## Table of Content

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.licenseSelected}

  ## Contributing 
  ${data.contributing}

  ## Tests 
  ${data.tests}

  ## Questions 
  If you have any questions or feedback, please contact me at ${data.questions}
`;
}

module.exports = generateMarkdown;
