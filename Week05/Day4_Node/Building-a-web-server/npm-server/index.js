const logEvents=require('./logEvents.js');

const EventEmitter=require('events');

class MyEmitter extends EventEmitter {};

//initialize objects
const myEmitter = new MyEmitter();

//add Listener
myEmitter.on('log',(msg)=>{
    logEvents.logEvent(msg);
});

setTimeout(()=>{
    //Emitter Event
    myEmitter.emit('log','Log Event Emitted');
},2000);