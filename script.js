const fs = require('fs');
const {prompt} = require('inquirer');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require('./lib/Employee.js')

const makeTeam = require("./src/generatecards.js")
const {menuQuestion, managerQuestions, engineerQuestions, internQuestions} = require('./questions')

const team = [];


function teamBuilder() {
  

  // These questions will be prompted in the terminal, based on the employee type they select.

  return prompt(menuQuestion)

  .then(({employeeType}) => {
    if (employeeType == 'Manager') {
      createManager();
    }
    else if (employeeType == 'Engineer') {
      createEngineer();
    }
    else if (employeeType == 'Intern') {
      createIntern();
    }
    else {
      makeFile();
    }
  })
}

// after questions are answered they are added to their respective classes with all of the information entered, and pushed into the array team.

function createManager() {
  prompt (managerQuestions)

  .then(input => {
    const manager = new Manager(input.name, input.id, input.email, input.officeNum);
    team.push(manager);
    teamBuilder();
  })
}

function createEngineer() {
  
  prompt(engineerQuestions)

  .then(input => {
    const engineer = new Engineer(input.name, input.id, input.email, input.github);
    team.push(engineer);
    teamBuilder();
  })
}

function createIntern() {
  prompt(internQuestions)

  .then(input => {
    const intern = new Intern(input.name,  input.id, input.email, input.school);
    team.push(intern);
    teamBuilder();
  })
}

//creates the HTML file.

function makeFile () {
  fs.writeFileSync('./dist/yourteam.html', makeTeam(team), "UTF-8")
  console.log('Your team has been created.')
}


//starts application

createManager();

