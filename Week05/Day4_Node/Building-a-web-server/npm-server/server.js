const http=require('http');
const path=require('path');
const fs=require('fs');
const fsPromises=require('fs').promises;

//We changed the scripts from index.js to server.js 
const logEvents=require('./logEvents.js');
const EventEmitter=require('events');
class MyEmitter extends EventEmitter {};

//initialize objects
const Emitter = new MyEmitter();
//add Listener
Emitter.on('log',(msg,fileName)=>{
    logEvents.logEvent(msg,fileName);
});
const PORT=process.env.PORT || 3000;

// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     let path;
//     if(req.url==='/' || req.url==='index.html'){
//         res.statusCode=200;
//         res.setHeader('Content-type','text/html');
//         path=path.join(__dirname,'views','index.html');
//         fs.readFile(path,'utf8',(err,data)=>{
//             res.end(data);
//         })
//     }
// });


// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     let path;
//     switch(req.url){
//         case '/':
//             res.statusCode=200;
//             path=path.join(__dirname,'views','index.html');
//             fs.readFile(path,'utf8',(err,data)=>{
//                 res.end(data);
//             });
//             break;
//     }
// })
const serveFile=async(filePath,contentType,response)=>{
    try {
        const rawData=await fsPromises.readFile(filePath,!contentType.includes('image')?'utf8':'');
        const data=contentType==='application/json'?JSON.parse(rawData):rawData;
        response.writeHead(filePath.includes('404.html')?404:200,{'Content-type':contentType});
        response.end(
            contentType==='application/json'?JSON.stringify(data):data
        );
    } catch (error) {
        console.log(error);
        Emitter.emit('log',`${error.name}\t${error.message}`,'errLog.txt');
        response.statusCode=500;
        response.end();
    }
}
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    Emitter.emit('log',`${req.url}\t${req.method}`,'reqLog.txt');
    const extension =path.extname(req.url); //in case of '/' there will be no extension so we can handle that
    let contentType;
    switch(extension){
        case '.css':
            contentType='text/css';
            break;
        case '.js':
            contentType='text/javascript';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.jpg':
            contentType='image/jpeg';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.txt':
            contentType='text/plain';
            break;
        default: //Handling '/'
            contentType='text/html';
    }

    let filePath=contentType==='text/html'&&req.url==='/' ? path.join(__dirname,'views','index.html'): contentType==='text/html'&&req.url.slice(-1)==='/' ? path.join(__dirname,'views',req.url,'index.html'):contentType==='text/html'?path.join(__dirname,'views',req.url):path.join(__dirname,req.url);

    //makes the .html statement not required in the browser
    if(!extension && req.url.slice(-1)!=='/'){
        filePath+='.html';
    }
    const fileExists=fs.existsSync(filePath);
    if(fileExists){
        //serve the file
        serveFile(filePath,contentType,res);
    }else{
        //404
        //301 - redirect
        switch(path.parse(filePath).base){
            case 'old.html':
                res.writeHead(301,{'Location':'/'}); //There is some error with this
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301,{'Location':'/'});
                res.end();
                break;
            default:
                //serve a 404 response
                serveFile(path.join(__dirname,'views','subdir','404.html'),'text/html',res);
                
        }
    }

})

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});



// setTimeout(()=>{
//     //Emitter Event
//     Emitter.emit('log','Log Event Emitted');
// },2000);