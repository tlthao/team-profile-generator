const inquirer = require('inquirer');

const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')

const fs = require('fs');

const createTeam = require('./src/createTeam');

team = [];
const managerInquiry = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((managerResponse) => {
    
        const manager = new Manager(managerResponse.id, managerResponse.name, managerResponse.email, managerResponse.officeNumber)
        team.push(manager)
        switch(managerResponse.addMember) {
            case 'Engineer':
                engineerInquiry();
                break;
            case 'Intern':
                internInquiry();
                break;
            default: 
            writeToFile('dist/index.html', createTeam(team))
        }
    });
};

const engineerInquiry = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((engineerResponse) => {
        const engineer = new Engineer(engineerResponse.id, engineerResponse.name, engineerResponse.email, engineerResponse.github)
        team.push(engineer)
        switch(engineerResponse.addMember) {
            case 'Engineer':
                engineerInquiry();
                break;
            case 'Intern':
                internInquiry();
                break;
            default: 
            writeToFile('dist/index.html', createTeam(team))
        }
    })
};

const internInquiry = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((internResponse) => {
        const intern = new Intern(internResponse.id, internResponse.name, internResponse.email, internResponse.school)
        team.push(intern)
        switch(internResponse.addMember){
            case 'Engineer':
                engineerInquiry();
                break;
            case 'Intern':
                internInquiry();
                break;
            default:
                writeToFile('dist/index.html', createTeam(team))
        }
    })
}

managerInquiry();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};