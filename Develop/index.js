// TODO: Include packages needed for this application

//node modules
const fs=require('fs');
const inquirer=require('inquirer');

//user defined modules
const util = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input


const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter  you email address'
  },

   {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  
  }, 
  {
    type: 'input',
    name: 'description',
    message: 'Please enter the project description'
  },
  
  {
      type: 'input',
      name: 'installation',
        message: "Enter the installation required for the project"
        
  },
  {
    type: 'input',
    name: 'usage',
    message: "Enter the usage instruction"
    
},
{
  type: 'input',
  name: 'contributors',
  message: "Enter the contributors details"
 
},
{
  type: 'input',
  name: 'test',
  message: "Enter the test run details"
  
},
{
  type: 'list',
  name: 'license',
  message: "Choose a license for your project.",
  choices: [{ value: 'Apache' },   
  { value: 'BSD3' },  
  { value: 'LGPL' },  
  { value: 'MIT' },  
  { value: 'MPL' }, 
  { value: 'None' },]
  
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log("Successfully create Readme File")
);
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then((userResponses) =>
   {
  const markdown = generateMarkdown(userResponses);
   console.log(markdown);
    writeToFile('README.md', markdown);
}
 );
    
  
  
 
}

// Function call to initialize app
init();
