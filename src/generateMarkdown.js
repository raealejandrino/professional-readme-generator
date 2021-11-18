

const tocCheck = confirmToC => {
    if (confirmToC) {
        return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributing)
* [Testing](#tests)
* [Questions](#questions)
`;
    }
};

const licenseCheck = (license, name) => {
    return `
Copyright (c) ${name}. All rights reserved.

Licensed under the ${license} license.`
};

const contributeCheck = (userInputs) => {
    if(!userInputs.contribute) {
        return `
If you'd like to contribute to this project, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/) standard guidelines.
`
    } else {
        return `
${userInputs.customContribute}
        `
    }
};

module.exports = userInputs => {
    return `
# ${userInputs.title}

## Description

${userInputs.description}

${tocCheck(userInputs.confirmToC)}

## Installation

${userInputs.installation}

## Usage

${userInputs.usage}

## License

${licenseCheck(userInputs.licenses, userInputs.name)}

## Contributing

${contributeCheck(userInputs)}

## Tests

${userInputs.tests}

## Questions

If you have any questions or concerns, please feel free to contact me via Github or email!

Email: ${userInputs.email}

[Github](https://github.com/${userInputs.name})
`
};