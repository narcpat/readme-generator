// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// To prompt the questions
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("You need to enter a project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your project: ",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter a project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process (if applicable): ",
      default: false,
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use: ",
    },
    {
      type: "input",
      name: "credits",
      message: "Please list all contributors: ",
    },
    {
      type: "list",
      name: "license",
      message: "Please select the appropriate license for your project: ",
      choices: ["GNU", "MIT", "Mozilla", "Boost", "Apache", "The Unlicense"],
    },
  ]);
};

promptUser();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
