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
  

  // These questions will be prompted in the terminal 

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

function makeFile () {
  fs.writeFileSync('./dist/yourteam.html', makeTeam(team), "UTF-8")
  console.log('Your team has been created.')
}


createManager();

