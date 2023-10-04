// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}
by ${responses.name}
${renderLicenseBadge(responses.license)}

## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contact Me](#contact-me)
* [Contributors](#contributors)
* [Testing](#testing)
${renderLicenseLink(responses.license)}

## Description
${responses.description}

## Requirements
${responses.require}

## Usage
${responses.usage}

## Contact Me
* Name: ${responses.name}
* Email: ${responses.email}
* Github: ${responses.github}

## Contributors
${responses.contributors}

## Testing
${responses.test}

${renderLicenseSection(responses.license)}
`;
}

module.exports = generateMarkdown;
