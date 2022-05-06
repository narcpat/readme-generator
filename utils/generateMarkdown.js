// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/github/license/${data.licenseSelected})
  `;
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

  ## <a name="installation"></a>Installation 
  ${data.installation}

  ## <a name="usage"></a>Usage 
  ${data.usage}

  ## <a name="license"></a>License 
  ${data.licenseSelected}

  ## <a name="contributing"></a>Contributing 
  ${data.contributing}

  ## <a name="tests"></a>Tests 
  ${data.tests}

  ## <a name="questions"></a>Questions 
  If you have any questions or feedback, please contact me at ${data.questions}
`;
}

module.exports = generateMarkdown;
