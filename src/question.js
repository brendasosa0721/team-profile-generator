//Inquirer
const inquirer = require("inquirer");
//require fs
const fs = require("fs");

//require team files
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

//create array for roles
const managers = [];
const engineers = [];
const interns = [];

//confirm new team member
const compileTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "compileTeamMember",
        message: "Click next to add another member?",
      },
    ])
    .then((answers) => {
      if (answers.compileTeamMember === true) {
        question1();
      } else {
        console.log(managers, engineers, interns);
        module.exports = managers;
        module.exports = engineers;
        module.exports = interns;
        deleteHtml();
        topHtmlFile();
        managerGenerator();
        engineerGenerator();
        internGenerator();
        bottomHtmlFile();
        return answers;
      }
    });
};

//question1
const question1 = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is employees role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        managerQuestions();
      } else if (answers.role === "Engineer") {
        engineerQuestions();
      } else if (answers.role === "Intern") {
        internQuestions();
      }
    });
};

question1();

//engineer questions
const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is engineers Id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is engineers email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is engineers github username?",
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineers.push(newEngineer);
      compileTeamMember();
    });
};

//intern questions
const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did the intern attend?",
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      interns.push(newIntern);
      compileTeamMember();
    });
};

//manager questions
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the managers id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      managers.push(newManager);
      compileTeamMember();
    });
};

//delete html file in none
const deleteHtml = () => {
  fs.unlinkSync("./index.html");
};

//append top html
const topHtmlFile = () => {
  fs.appendFileSync("index.html", generateHTML());
};

//append manager
const managerGenerator = () => {
  managers.forEach((manager) => {
    fs.appendFileSync("index.html", generateMgr(manager));
  });
};

//append engineer
const engineerGenerator = () => {
  engineers.forEach((engineer) => {
    fs.appendFileSync("index.html", generateEng(engineer));
  });
};

//append intern
const internGenerator = () => {
  interns.forEach((intern) => {
    fs.appendFileSync("index.html", generateIntern(intern));
  });
};

//append html bottom
const bottomHtmlFile = () => {
  fs.appendFileSync("index.html", generateBtm());
};

const generateHTML = () => {
  return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./output/style.css">
    <title>Team Generator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Team Generator</h1>
            </div>
        </div>
    </div>`;
};


const generateIntern = (intern) => {
  return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="intern">Intern
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 10l1 2h6" />
                    <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
                    <line x1="13" y1="9" x2="13" y2="6" />
                    <line x1="5" y1="6" x2="20" y2="6" />
                    <path d="M15 9.1v3.9h5.5" />
                    <line x1="15" y1="19" x2="15" y2="16" />
                    <line x1="19" y1="19" x2="11" y2="19" />
                  </svg>
            </h2>
        </div>
    </div>    
            <div class="employee">
                <p>Name: ${intern.name}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>Id: ${intern.id}</p>
                <p>Role: ${intern.role}</p>
                <p>School: ${intern.school}</p>
            </div>
</div>`;
};

//add engineer card html
const generateEng = (engineer) => {
  return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="engineer">Engineer
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                <line x1="8" y1="11" x2="10" y2="13" />
                <line x1="16" y1="11" x2="14" y2="13" />
            </svg>
            </h2>     
        </div>
    </div>
            <div class="employee">
                <p>Name: ${engineer.name}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Id: ${engineer.id}</p>
                <p>Role: ${engineer.role}</p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
</div>`;
};


const generateMgr = (manager) => {
  return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="manager">Manager
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10h4v4h-4z" />
                <line x1="10" y1="10" x2="6.5" y2="6.5" />
                <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
                <path d="M14 10l3.5 -3.5" />
                <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
                <line x1="14" y1="14" x2="17.5" y2="17.5" />
                <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
                <line x1="10" y1="14" x2="6.5" y2="17.5" />
                <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
            </svg>
            </h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${manager.name}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Id: ${manager.id}</p>
                <p>Role: ${manager.role}</p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>
</div>`;
};

const generateBtm = () => {
  return `</body>
    </html>`;
};
