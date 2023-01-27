const menuQuestion = [

  {
    type: 'list',
    name: 'employeeType',
    message: 'What type of employee are you adding?',
    choices: [ 'Engineer', 'Intern', 'Done adding employees.'],
  },

]


const managerQuestions =[
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the manager?',
    validate: (manName) => {
      if (manName) {
        return true
      }
      else {
        return "Please enter a manager name."
      }

    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Please enter an ID for the manager',
    validate: (manID) => {
      if (manID) {
        return true
      }
      else {
        return "Please enter an ID."
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: (manEmail) => {
      if (manEmail) {
        return true;
      }
      else {
        return "Please enter an email address."
      }
    }
  },
  {
    type: 'input',
    name: 'officeNum',
    message: 'What is the manager office number?',
    validate: (manoffNum) => {
      if (manoffNum) {
        return true;
      }
      else {
        return "Please enter an office number."
      }
    }
  }
]

const engineerQuestions = [
  {
    type:'input',
    name: 'name',
    message: "Please enter your engineer's name",
    validate: (engineerName) => {
      if (engineerName) {
        return true;
      }
      else {
        return "Please enter an engineer name."
      }
    }
  },

  {
    type: 'input',
    name: 'id',
    message: "Please enter engineer ID.",
    validate: (engineerID) => {
      if (engineerID) {
        return true;
      }
      else {
        return "Please enter an engineer ID."
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter engineer email address.",
    validate: (engineerEmail) => {
      if (engineerEmail) {
        return true;
      }
      else {
        return "Please enter an engineer email address."
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter engineer Github username.",
    validate: (engineergitHub) => {
      if (engineergitHub) {
        return true;
      }
      else {
        return "Please enter an engineer Github username."
      }
    }
  },

]

const internQuestions = [
  {
    type:'input',
    name: 'name',
    message: "Please enter your intern's name",
    validate: (internName) => {
      if (internName) {
        return true;
      }
      else {
        return "Please enter an intern name."
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter intern ID.",
    validate: (internID) => {
      if (internID) {
        return true;
      }
      else {
        return "Please enter an intern ID."
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter intern email address.",
    validate: (internEmail) => {
      if (internEmail) {
        return true;
      }
      else {
        return "Please enter an intern email address."
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: "Please enter your intern's school?",
    validate: (internSchool) => {
      if (internSchool) {
        return true;
      }
      else {
        return "Please enter your intern's school."
      }
    }
  }
]

module.exports = {menuQuestion, managerQuestions, engineerQuestions, internQuestions}