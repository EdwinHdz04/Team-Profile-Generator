const inquirer = require("inquirer");
const fs = require('fs/promises');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee'); 
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager'); 

let team = []



function createFile(src,data){
    fs.writeFile("./src/barebones.html", htmlPageContent, (err)=> {
        err ? console.log(err): console.log("Successfully created index.html!")
    });
}

// This will initialize the prompt function 
const makeemployee = () =>{
    inquirer
  .prompt([
    {
      type: 'list',
      name: 'makeemployee',
      message: 'What type of employee do you want to create?',
      choices: ['Engineer','Intern','Manager','None'],
    }

])
.then(answers => {
    switch (answers.makeemployee) {
        case "Engineer" : 
        makeEngineer();
        break;
    
        case "Intern" : 
        makeIntern();
        break;

        case "Manager" :
        makeManager();
        break;

        case "None" :
        let htmlPageContent = generateHTML(answers)
        createFile('./src/barebones.html', htmlPageContent);
    }  
}) 
}
//This function will make the Engineer

 const makeEngineer = () =>{
    inquirer.prompt([
        {
            type:'input',
            name:'engineerName',
            message: "What is the engineer's name?",
        },
        {   
            type:'input',
            name:'engineerId',
            message: "What is the engineer's employee ID?",

        },
        {
            type:'input',
            name:'engineerEmail',
            message: "What is the engineer's email address?",
        },
        {
            type:'input',
            name:'engineerGithub',
            message: "What is the engineer's github username?",
        }  
    ]).then(answers =>{
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.EngineerGithub)
        employee.push(engineer);
        makeemployee()   
    })
}
//This function will make the Intern
const makeIntern = () =>{
    inquirer.prompt([
        {
            type:'input',
            name:'internName',
            message: "What is the intern's name?",
        },
        {   
            type:'input',
            name:'internId',
            message: "What is the intern's employee ID?",

        },
        {
            type:'input',
            name:'internEmail',
            message: "What is the intern's email address?",
        },
        {
            type:'input',
            name:'internSchool',
            message: "What is the intern school?",
        }  
    ]).then(answers =>{
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub)
        employee.push(intern);
        makeemployee()   
    })
}
//This function will make the Manager
const makeManager = () =>{
    inquirer.prompt([
        {
            type:'input',
            name:'managerName',
            message: "What is the manager's name?",
        },
        {   
            type:'input',
            name:'managerId',
            message: "What is the manager's employee ID?",

        },
        {
            type:'input',
            name:'managerEmail',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name:'managerOfficeNumber',
            message: "What is the manager's office number?",
        }  
    ]).then(answers =>{
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        employee.push(manager);
        makeemployee()   
    }); 
}

 makeemployee()      