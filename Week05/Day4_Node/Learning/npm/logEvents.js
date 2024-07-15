// npm are basically node common core modules that are created by third parties.
// npm website -> docs (axois) -> CLI 
// console.log('testing');

//installing node package globally : nodemon is a development package. Nodemon monitors your files and as you save, it autmoatically restarts the server so we are not always typing node and file name in the terminal.
//   npm install nodemon -g

// In case its showing restriction, go to powershell -> run as administrator
// PS C:\WINDOWS\system32> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

// Execution Policy Change
// The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
// you to the security risks described in the about_Execution_Policies help topic at
// https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
// [Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): Y

//nodemon searches for index.js, so need to mention this.

//Installing a package to our project:
//      npm init
//OR
//      npm init -y
// The above adds a package.json file wth all the questions we answered.
//      npm install date-fns
//The above is the package for date functions. It will be installed as a dependency. For production, 'build', this packagew would already be included.
//npm-modules are faily large and we dont include it in github so we always add .gitignore and write node_modules in it.

//Opening and closing VSCode removes the loading error.

//Read package json and install node_modules you need: 
//npm install

const {format}=require('date-fns');

// console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss')); //Remember this

//Add nodemon as dev package in the project
// npm install nodemon -D

//Scripts:
// start: 'node index'  //dev:'nodemon index'
//After this start script, we can simply type npm start and the project will run on its own. and nodemon will start if we use npm run dev

//Production Dependencies:
//npm install uuid

const {v4:uuid}=require('uuid');
// const {uuid}=require('uuid'); and then use as uuid.v4
// console.log(uuid());

//uuid: ^8 (major version) .3 (minor version) .2 (patch)
//uuid:8.3.2 means only and only this version will work for the project.
//uuid: ^8.3.2 means you can update minor and batch version but not major version
//uuid:~8.3.2 means only update patches.
//uuid: * means you can update everything

//npm install uuid@8.3.1 //for the specific function
// To check updates: npm update
//On Regular Basis : npm rm nodemon -D
//npm uninstall nodemon -D

//After uninstalling remove it from the scripts too.

const fsPromises=require('fs').promises;
const path=require('path');
const fs=require('fs');

const logEvent=async(message)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem=`${dateTime}\t${uuid()}\t${message}\n`
    try {
        if(!fs.existsSync(path.join(__dirname,'log'))){
            await fsPromises.mkdir(path.join(__dirname,'log'));
        }
        await fsPromises.appendFile(path.join(__dirname,'log','eventLog.txt'),logItem);
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={logEvent};