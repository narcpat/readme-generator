// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// To prompt the questions
const promptUser = () =>
  inquirer
    .prompt([
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
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use: ",
      },
      {
        type: "list",
        name: "license",
        message: "Please select the appropriate license for your project: ",
        choices: ["GNU", "MIT", "Mozilla", "Boost", "Apache", "The Unlicense"],
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide guidelines for contributors (optional): ",
      },
      {
        type: "input",
        name: "tests",
        message:
          "If you have written tests, provide examples on how to run them (optional): ",
      },
      {
        type: "input",
        name: "questions",
        message: "Provide your email address for feedback and inquiries: ",
      },
    ])
    .then(userAnswers => {
      console.log(userAnswers.description);
    });

// TODO: Create a function to initialize app
function init() {
  // Ask user questions and generate the answers
  promptUser()
    .then(userAnswers => {
      return generateContent(userAnswers);
    })
    // write the new README to Dist
    .then(readmePageBuild => {
      return writeToFile("./dist/README.md", generateContent);
      console.log("README successfully created");
    })
    .catch(err => {
      console.log(err);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();
