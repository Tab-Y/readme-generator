// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
      return '';
    case 'Academic Free License v3.0':
      return `\n![License](https://img.shields.io/badge/License-afl_3.0-blue)`;
    case 'Apache license 2.0':
      return `\n![License](https://img.shields.io/badge/License-apache_2.0-blue)`;
    case 'MIT':
      return `\n![License](https://img.shields.io/badge/License-mit-blue)`;
    case 'Microsoft Public License':
      return `\n![License](https://img.shields.io/badge/License-ms_pl-blue)`;
    case 'Open Software License 3.0':
      return `\n![License](https://img.shields.io/badge/License-osl_2.0-blue)`;
    case 'Mozilla Public License 2.0':
      return `\n![License](https://img.shields.io/badge/License-mpl_2.0-blue)`;
    case 'Creative Commons license family':
      return `\n![License](https://img.shields.io/badge/License-acc-blue)`;
    case 'Artistic License 2.0':
      return `\n![License](https://img.shields.io/badge/License-artistic_2.0-blue)`;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    // inserts a link to license section 
    return `\n- [License](#license)`
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // can be changed to switch statement for each selected license information
  if (license === 'none') {
    return '';
  } else {
    // inserts a new header for license if there is one, and formats to markdown 
    return `\n\n## License \n
  info about the license  \n`
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = `${data.license}`;
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license);
  let installation = `${data.installation}`;
  let usage = `${data.usage}`;
  let description = `${data.description}`;
  let credits = `${data.contributing}`;
// keep alligned left to format document correctly
  return `# ${data.title} ${licenseBadge}\n
## Description \n
${description}\n 
## Table of Contents\n 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)${licenseLink}
- [Badges](#badges)
- [Features](#features)
- [Questions](#questions)
- [Tests](#tests) \n
##  Installation \n
${installation} \n
## Usage \n
${usage} \n
![Descriptive text](assets/images/screenshot.png) \n
## Credits \n
${credits} ${licenseSection} \n
## Badges \n
Add badges to this section \n
## Features \n
Add features to this space \n
## Questions \n
If you have any questions or concerns, please reach out to ${data.username} at ${data.email}. \n
## Tests \n
${data.tests} \n
`;
}

module.exports = generateMarkdown;
