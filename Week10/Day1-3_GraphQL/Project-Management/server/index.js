// GraphQL an open source data query and manipulation language for APIs and a runtime for fulfilling queries with existing data.
// It is an alternative to a REST API, with some added benefits such the ability to request the exact data you want.
// In graphQL instead of requests like put etc. we use queries. graphQL has a single endpoint /graphql.
// For update or delete, we use mutations.
// mutation{
//     addProject(
//         name:'Misbah',
//         clientID:'1'){
//             name,
//             status
//     }
// }

// GraphiQL is a tool that helps us make queries.
// GraphQL servers have a 'schema' that specifies all of the fields as well as their types.
// The most basic component of a GraphQL schema are object types. Scalar:String, Int, Float, Boolean,ID

// we will be using package called express-graphql which is a GraphQL server for node.js with tools to use with express.
// Apollo Server is another popular tool that you can easily use as well as some content management systems like Graph CMS to easily create a GraphQL API.
// FrontEnd (Apollo client,react framework, bootstrap UI) ->graphQL API{graphiql client}->SERVER(GraphQL,Node.js,Express{express-graphql})->mongoose ODM->MongoDB Atlas

// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

// npm init -y -> package.json

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

// npm install express express-graphql graphql mongoose cors colors

// npm install -D dotenv nodemon
const express=require('express');
const dotenv=require('dotenv').config(); //use .config() while importing is better
const {graphqlHTTP}=require('express-graphql');
const schema=require('./schema/schema')

PORT=process.env.PORT||5000;

const app=express();

//graphqlHTTP requires a schema and we have that in schema folder
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='Development',
}));

app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}`)})