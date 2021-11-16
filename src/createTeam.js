const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')




let createManagerBox = (Manager) => {
  return `
  <div class="box m-1 shadow rounded" style="width: 22rem">
    <div class='box-header'>
      <h3 class="box-title fw-bolder p-4">${Manager.getName()}</h3>
      <h6 class="box-text pl-3"><i class="fa fa-star-o"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="box-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: ${Manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

let createEngineerBox = (Engineer) => {
  return `
  <div class="box m-1 shadow rounded" style="width: 22rem">
    <div class='box-header'>
      <h3 class="fw-bolder p-4 box-title">${Engineer.getName()}</h3>
      <h6 class="box-text pl-3"><i class="fa fa-wrench"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="box-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `
};

let createInternBox = (Intern) => {
  return `
  <div class="box m-1 shadow rounded" style="width: 22rem">
    <div class='box-header'>
      <h3 class="fw-bolder p-4 box-title">${Intern.getName()}</h3>
      <h6 class="box-text pl-3"><i class="fa fa-book"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="box-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: ${Intern.getEmail()}</li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function createBox(team) {
    let box = []
    for(let i = 0; i < team.length; i++) {
      const teamArray = team[i];
      switch(teamArray.getRole()) {
        case 'Manager':
          const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
          box.push(createManagerBox(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
          box.push(createEngineerBox(engineer));
          break;
        case 'Intern':
          const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
          box.push(createInternBox(intern));
          break;
      }
    }
    return box.join(``)
}

function createTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>Team Generator</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-primary rounded">
  <div class="container">
    <h1 class="fw-bolder display-6 text-center ">My Team</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${createBox(team)}
</div>
</body>
</html>
    `
}


module.exports = createTeam;