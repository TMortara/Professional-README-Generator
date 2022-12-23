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
        message: "Please list any installation steps for your project:",
        name: "installation"
    },
    {   type: "input",
        message: "How do you navigate your project?",
        name: "usage"
    },
    {   type: "input",
        message: "List all contributors to your project",
        name: "contributors"
    },
    {   type: "input",
        message: "List any test instructions for your project:",
        name: "test"
    },
    {   type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {   type: "checkbox",
        message: "Choose your license:",
        name: "license",
        choices: ["MIT", "Apache 2.0", "Perl", "None"]
    },
    {   type: "input",
        message: "What is your email address?",
        name: "email"
        // validate:
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md",generateMarkdown(responses), err =>{
        if (err){
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(respones => {
         
        
    })

}

// Function call to initialize app
init();