// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email at ${data.email}.   
`;
}

module.exports = generateMarkdown;
