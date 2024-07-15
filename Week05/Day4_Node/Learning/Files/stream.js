//Doing all of it at once
const fs=require('fs');
const rs=fs.createReadStream('./lorem.txt',{encoding:'utf8'});
const ws=fs.createWriteStream('./newLorem');

// rs.on('data',(dataChunk)=>{
//     //console.log(dataChunk);
//     ws.write(dataChunk);
// })

rs.pipe(ws); //same thing as commented code.