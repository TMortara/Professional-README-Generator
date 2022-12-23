// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license === "None") {
    return "";
  } else if (license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Perl") {
    badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
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
## Description
${data.description}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies)
- [How to use the Application](#usage)
- [Credits](#credits)
- [Contributions](#contributing)
- [Tests](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Built With
${data.technologies}

## How to use the Application
${data.usage}

## Credits
${data.credits}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
### Contact Information
- GitHub: [${data.username}](https://www.github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
