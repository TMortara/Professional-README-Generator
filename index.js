// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {   type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {   type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {   type: "input",
        message: "List any installation steps for your project:",
        name: "installation"
    },
    {   type: "input",
        message: "List instructions to navigate your application",
        name: "usage"
    },
    {   type: "input",
        message: "List any Credits to your project:",
        name: "credits"
    },
    {   type: "input",
        message: "Are there guidelines to contribute to this project?",
        name: "contributing"
    },
    {   type: "input",
        message: "What languages did you use to build your project?",
        name: "technologies"
    },
    {   type: "input",
        message: "List any test instructions for your project:",
        name: "test"
    },
    {   type: "list",
        message: "Choose your license:",
        name: "license",
        choices: ["MIT", "Apache 2.0", "Perl", "None"]
    },
    {   type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {   type: "input",
        message: "What is your email address?",
        name: "email"
        // validate:
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err)
        : console.log("File written successfully");
    });
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("SampleREADME.md", generateMarkdown(responses));
    });
}

// Function call to initialize app
init();