const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
//const open = require("open");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// create array to store team member created

const team = [];

// create questions to ask user

const questions = [{
    type: "input",
    name: "name",
    message: "What is the Manager's name?"
},
{
    type: "input",
    name: "id",
    message: "What is the Manager's id?"
},
{
    type: "input",
    name: "email",
    message: "What is the Manager's email?"
},
{
    type: "input",
    name: "officeNum",
    message: "What is the Manager's Offic Number?"
},
];
// question to add team and what time?
const teamAdd = [
    {
        type: "list",
        name: "add",
        message: "Which type of team member would you like to add?",
        choices:  [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
        ]
    }
]
// questions for intern 
const internQ = [{

    type: "input",
    name: "name",
    message: "What is the Intern's name?"
},
{
    type: "input",
    name: "id",
    message: "What is the Intern's id?"
},
{
    type: "input",
    name: "email",
    message: "What is the Intern's email?"
},
{
    type: "input",
    name: "school",
    message: "What school does the Intern attend?"
}
];
// questions for Engineer
const engineerQ = [{

        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github username"
    } 
];
// run when initialized
function init(){
    inquirer.prompt(questions).then(function (answers){
        const manager= new Manager(answers.name,parseInt(answers.id),answers.email,parseInt(answers.officeNum));
        team.push(manager);

        addTeam();
    });
};
// add team function 
function addTeam(){
    inquirer.prompt(teamAdd).then(function (answers) {
        if(answers.add === "Engineer") {
            createEngineer();
        }
        else if (answers.add === "Intern") {
            createIntern();
        }
        else {
            //render(team);
        }

    });
};

function createEngineer(){
    inquirer.prompt(engineerQ).then(function (answers){
        const engineer= new Engineer(answers.name,parseInt(answers.id),answers.email,answers.github);
        team.push(engineer);

        addTeam();
    });

};
function createIntern(){
    inquirer.prompt(internQ).then(function (answers){
        const intern= new Intern(answers.name,parseInt(answers.id),answers.email,answers.school);
        team.push(intern);

        addTeam();
    });

};

init();