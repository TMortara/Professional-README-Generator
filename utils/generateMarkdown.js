// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
    if (license == "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (license == "Apache 2.0") {
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else if (license == "Perl") {
      badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      } else if (license = "Eclipse Public License 1.0") {
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      } else if (license == "None") {
        badge = "";
      }
      return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//Did not create a function for this since the badge is the link.
// function renderLicenseLink(license) {
//   if(license !== "None") {
//     return 
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None") {
    return `## License
    This application is under the ${license} license.`
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Built With](#built-with)
- [How to use the Application](#how-to-use-the-application)
- [License](#license)
- [Credits](#credits)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Built With
${data.technologies}

## How to use the Application
${data.usage}

${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Contributions
### Below are guidelines on how you can contribute to this project: 
${data.contributing}

## Tests
${data.test}

## Questions
### Contact Information
- GitHub: [${data.username}](https://www.github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
