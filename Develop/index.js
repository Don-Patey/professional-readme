const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please provide the name of your Project.",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide details on the purpose and functionality of the Project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable",
    choices: ["MIT", "APACHE2.0", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here",
  },
  {
    type: "input",
    name: "usage",
    message: "State any languages or technologies associated with this Project",
  },
  {
    type: "input",
    name: "creator",
    message: "Please provide your name",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors to this Project",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide any testing information",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
  // Dynamic import of inquirer
  const inquirerModule = await import("inquirer");
  const inquirer = inquirerModule.default;

  const responses = await inquirer.prompt(questions);
  console.log("Creating Professional README.md File....");
  writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
}

// Function call to initialize app
init();
