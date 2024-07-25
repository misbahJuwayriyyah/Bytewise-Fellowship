// Rest client (react application - UI) and Rest server (Express and REST APIs).
// For Creation : You send some payload (data) to the server.
// We will use POSTMAN which is a great tool for http client and MONGODB Database.
//use : npm init : to initialize package.json file in the root folder
//To install express, go to the root directory and use : npm install express dotenv mongoose colors  
//As a dev dependency : npm install -D nodemon 
//Then use "server":"nodemon backend/server.js" in package.json and then use npm run server to run the file.
//We use "npm run [any script that is included in the scripts in the package.json]"
//We will deploy it to Heruko

//Import necessary packages
const express = require('express');
const dotenv =require('dotenv').config();
const {errorHandler}=require('./middleware/errorMiddleware');
const PORT=process.env.PORT||5000;

//Initialize express
const app=express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//start listening
// app.listen(PORT,()=>console.log(`Server Started on Port ${PORT}`));

//Signup on postman -> open a tab -> input request method and url ->send
//When testing an API locally, you need to use the Postman Desktop Agent. You currently have a different Agent selected, which can’t send requests to the Localhost.

//creating a route
// app.get('/api/goals',(req,res)=>{
//     // res.send('Get Goals');
//     //usually we would return json
//     // res.json({message:'Get Goals'})
//     //We can also set the status manually
//     res.status(200).json({message:'Get Goals'})
// });

//now we should get a response on postman
//not all routes in one place -> goto backend/routes


//using routes from another file
app.use('/api/goals',require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(PORT,()=>console.log(`Server Started on Port ${PORT}`));

