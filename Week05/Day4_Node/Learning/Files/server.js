//File System common core module for node.js
//Refer to the node js docs -> file system -> Ctrl+F -> search readFiles -> fs.readFile(path[,options],callback)
// A normal function is called directly by its name with parentheses.

// A callback function is passed as an argument to another function to be executed later.
const fs=require('fs');

fs.readFile('./starter.txt',(err,data)=>{
    if (err) throw err;
    console.log(data);  // return buffer data
    console.log(data.toString()) // to read actual data
});
//          OR
//Better way to add path
const path=require('path');
//incase of multiple folder, you can use : path.join(__dirname,'files','starter.txt')
// fs.readFile(path.join(__dirname,'starter.txt'),'utf8',(err,data)=>{ //provide encoding
//     if (err) throw err;
//     console.log(data);
// });


//Node is asynchronous so it will run the following code before the above code.
// console.log('Hello...');


//writing files
//new file reply.txt
// const toWrite='Nice to meet you';
// fs.writeFile(path.join(__dirname,'reply.txt'),toWrite,(err)=>{ //provide encoding
//     if (err) throw err;
//     console.log('write complete');
// });
// //It will also create a file if it does not exist
// fs.appendFile(path.join(__dirname,'starter.txt'),toWrite,(err)=>{ //provide encoding
//     if (err) throw err;
//     console.log('write complete');
// });

// //Renaming File
// fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'replied.txt'),(err)=>{ //provide encoding
//     if (err) throw err;
//     console.log('Rename complete');
// });



//It is better to put appendFile inside the writeFile function. It is to ensure that a file is created.
// const toWrite='Nice to meet you';
// fs.writeFile(path.join(__dirname,'reply.txt'),toWrite,(err)=>{ //provide encoding
//     if (err) throw err;
//     console.log('write complete');
//     fs.appendFile(path.join(__dirname,'reply.txt'),toWrite,(err)=>{ //provide encoding
//         if (err) throw err;
//         console.log('write complete');
//         fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,      'replied.txt'),(err)=>{ //provide encoding
//         if (err) throw err;
//         console.log('Rename complete');
            // });
//     });
// });

// Th above way is called callback hell. In vanilla Js we use async-await to avoid this but here we will:
const fsPromises=require('fs').promises;
const fileOps=async()=>{
    try {
        // const data=await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf8');//no callback is required
        // console.log(data);

        await fsPromises.writeFile(path.join(__dirname,'reply.txt'),' Nice to meet you');
        await fsPromises.appendFile(path.join(__dirname,'reply.txt'),' How are you?');
        await fsPromises.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'replied.txt'));
        
        const data1=await fsPromises.readFile(path.join(__dirname,'replied.txt'),'utf8');//no callback is required
        console.log(data1);
        //Deleting a file
        // await fsPromises.unlink(path.join(__dirname,'starter.txt'));
    } catch (error) {
        console.log(error);
    }
}
fileOps();
//exit on uncaught exception e.g file that does not exist i.e, Hello.txt
process.on('uncaughtException',(err)=>{
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
});

