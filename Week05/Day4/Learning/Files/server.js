//File System common core module for node.js
//Refer to the node js docs -> file system -> Ctrl+F -> search readFiles -> fs.readFile(path[,options],callback)
// A normal function is called directly by its name with parentheses.

// A callback function is passed as an argument to another function to be executed later.
const fs=require('fs');

fs.readFile('./starter.txt',(err,data)=>{
    if (err) throw err;
    console.log(data);  // return buffer data
    console.log(data.toString()) // to read actual data
})
//          OR
fs.readFile('./starter.txt','utf8',(err,data)=>{ //provide encoding
    if (err) throw err;
    console.log(data);
})
//Node is asynchronous so it will run the following code before the above code.
console.log('Hello...') 

//exit on uncaught exception e.g file that does not exist
process.on('uncaughtException',(err)=>{
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
})
