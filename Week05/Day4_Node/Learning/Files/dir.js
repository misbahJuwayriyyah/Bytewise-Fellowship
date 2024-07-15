const fs=require('fs');
if(!fs.existsSync('./new')){ // Useful for renaming, writing, reading, deleting file
    fs.mkdir('./new',(err)=>{
        if (err) throw err;
        console.log('director created');
    }); // To create a folder.
}
if(fs.existsSync('./new')){ // Useful for renaming, writing, reading, deleting file
    fs.rmdir('./new',(err)=>{
        if (err) throw err;
        console.log('director removed');
    }); // To create a folder.
}


