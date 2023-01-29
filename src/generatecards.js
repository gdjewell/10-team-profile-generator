const Employee = require('../lib/Employee')


//generates cards for each member of the of the team, and populates them with the data stored within the individual classes.

const buildManager = manager => {
   
  return `<div class="card col-3 align-center mx-auto">
  <div class="card-header text-white bg-secondary">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-title">${manager.getRole()}</h6>
  </div>
  <div class="card-body">
    
    <p class="card-text">ID: ${manager.id} </p>
    <p class="card-text">Email: <a class="text-decoration-none" href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
  </div>
</div>`
}

const buildEngineer = engineer => {

  return `<div class="card col-3 align-center mx-auto">
  <div class="card-header text-white bg-secondary">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-title">${engineer.getRole()}</h6>
  </div>
  <div class="card-body">
    
    <p class="card-text">ID: ${engineer.id}</p>
    <p class="card-text">Email: <a class="text-decoration-none" href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="card-text">Github: <a class="text-decoration-none" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
  </div>
</div>`
}

const buildIntern = intern => {

  return `<div class="card col-3 align-center mx-auto">
  <div class="card-header text-white bg-secondary">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-title">${intern.getRole()}</h6>
  </div>
  <div class="card-body">
    
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">Email: <a class="text-decoration-none" href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="card-text">School: ${intern.school}</p>
  </div>
</div>`
}

const makeTeam = yourteam => {

 const cards = yourteam.map(Employee => {

  // Determines which card to make based on the role of each team member.
    

      if (Employee.getRole() == "Manager") {
        return {
          role: "Manager",
          card: buildManager(Employee)
        }
     
      }
      if (Employee.getRole() == "Engineer") {
        return {
          role: 'Engineer',
          card: buildEngineer(Employee),
        }
  
      }
      if (Employee.getRole() == "Intern") {
        return {
          role: 'Intern',
          card: buildIntern(Employee),
        }
      }
    }
  )


 //the HTML page generation

  return ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
    <title>team Builder</title>
  </head>
  <body>
    <div class="container-fluid">
  
      <header class="row">
        <div class="col-12 align-center bg-danger text-white text-center">
          <h1>Your Team</h1>
        </div>
      </header>
  
      <div class="container-fluid">
       <div class="row my-4">
          <div class="manager-container col-12 text-center">
            <h2>Manager</h2>
            ${cards.find(card => card.role === "Manager").card}
           
      
        </div>
  
        <div class="row my-5">
            <h2 class="text-center">Engineers</h2>
            
            <div class="engineer-container row my-4 text-center">
            ${cards.filter(card => card.role === "Engineer").map(card => card.card).join("")}
            
        
          </div>
      
        </div>
  
        <div class="row my-5">
          <h2 class="text-center">Interns</h2>
          
          <div class="engineer-container row my-4 text-center">
          ${cards.filter(card => card.role === "Intern").map(card => card.card).join("")}
          
      
        </div>
    
      </div>
  
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
  </html>
  `
}



module.exports = makeTeam 