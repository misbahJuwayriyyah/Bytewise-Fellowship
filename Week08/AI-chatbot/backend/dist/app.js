//MERN Stack is a collection of Js technologies that work together to make a full stack web development environment.
// -> A modern AI project which will use OPENAI API to create an ai real-time chatbot similar to ChatGPT. The application stores user's chats in a database to keep track of conversations, but a user can delete them anytime. The UI is capabale of showing of code blocks if requested by user.
// Step 1: Setup Node, Express App with Typescript (github) -> npm install
//Js to Typescript: "build":"tsc"
//We'd need following for the project:
//"dependencies": {
//   "bcrypt": "^5.1.0",
//   "concurrently": "^8.2.0",
//   "cookie-parser": "^1.4.6",
//   "cors": "^2.8.5",
//   "dotenv": "^16.3.1",
//   "express": "^4.18.2",
//   "express-validator": "^7.0.1",
//   "jsonwebtoken": "^9.0.1",
//   "mongoose": "^7.4.2",
//   "openai": "^3.3.0"
// },
//end points = routes
import express from 'express';
const app = express();
//middleware
//app.use is used to define the middlesware
//the following loc means that we will be using json for the incoming and outgoing data
app.use(express.json());
//app.put etc. are used too create routes
//req.params.id in order to access the /:id of the route
//res.send to send something from backend to the UI
// app.delete("/ai/:id",(req,res,next)=>{
//   return res.send(req.params.id);
// });
export default app;
//# sourceMappingURL=app.js.map