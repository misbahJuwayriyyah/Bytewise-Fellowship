//Node.js is a Js runtime. It runs on the server. 
//Node.js differs from Vanilla Js.
//  1. Node runs on the server - not in a browser (backend not frontend)
//  2. The console is the terminal window. (type node and enter to write Js in the terminal).
console.log('Hello World');
// node server.js to run the file
//  3. Global Object instead of Window Object.
// console.log(global); //global is the keyword for global object. Global object is smaller than window object.
//  4. Has common core modules
//  5. Common JS modules instead of ES6 modules
//  6. Missing some JS APIs like fetch.

// Following is how we import in node.js:
const os = require('os'); //File is a CommonJS module; it may be converted to an ES module.
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname); //directory name
console.log(__filename); //filename

const path=require('path');
console.log(path.dirname(__filename)); //same as __dirname
console.log(path.basename(__filename)); //only file name
console.log(path.extname(__filename)); //same as __dirname //extension name
console.log(path.parse(__filename)); // object with all the above values.

const math=require('./math'); //importing math.js file
//                      OR
const {subtract,multiply}=require('./math');// destructuring
console.log(math.add(2,3)); //using the math function
console.log(math.divide(2,3)); //using the math function
console.log(subtract(2,3)); //using the subtract function
console.log(multiply(2,3)); //using the multiply function



