//In graphQL data can be anything
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList,GraphQLNonNull,GraphQLEnumType}=require('graphql');

//Mongoose models
//Import what was exported as a model without destructuring
const Project=require('../database/models/project');
const Client=require('../database/models/client');

//Client type
const ClientType=new GraphQLObjectType({
    name:'Client',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        phone:{type:GraphQLString},
        email:{type:GraphQLString}
    })
});

//Project Type
const ProjectType=new GraphQLObjectType({
    name:"Project",
    fields:()=>({
        id:{type:GraphQLID},
        clientId:{type:GraphQLID},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        status:{type:GraphQLString},
        //following is how you create a relationship between multiple types. Here parent is project and child is client.
        client:{
            type:ClientType,
            resolve(parent,args){
                return Client.findById(parent.clientId);
            }
        }
    })
});

//queries - root query 
//Fetching the data
const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        clients:{
            type:new GraphQLList(ClientType),
            resolve(parent,args){
                return Client.find();
            }
        },
        client:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //we will put mongoose function here
                return Client.findById(args.id);
            }
        },
        projects:{
            type:new GraphQLList(ProjectType),
            resolve(parent,args){
                //connecting to actual db
                return Project.find();
            }
        },
        project:{
            type:ProjectType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Project.findById(args.id);
            }
        }
    }
});

//Mutations
const mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addClient:{
            type:ClientType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                email:{type:GraphQLNonNull(GraphQLString)},
                phone:{type:GraphQLNonNull(GraphQLString)},
            },
            resolve(parent,args){
                const client=new Client({
                    name:args.name,
                    email:args.email,
                    phone:args.phone
                });
                return client.save();
            }
        },
        deleteClient:{
            type:ClientType,
            args:{id:{type:GraphQLNonNull(GraphQLID)}},
            resolve(parent,args){
                return Client.findByIdAndRemove(args.id);
            }
        },
        addProject:{
            type:ProjectType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                description:{type:GraphQLNonNull(GraphQLString)},
                status:{
                    type:GraphQLNonNull(new GraphQLEnumType({
                        name:'ProjectStatus',
                        values:{
                            'new':{value:'Not Started'},
                            'progress':{value:'In Progress'},
                            'old':{value:'Done'}
                        }
                    })),
                    defaultValue:'Not Started'
                    },
                    clientId:{
                        type:GraphQLNonNull(GraphQLID)
                    }
                
            },
            resolve(parent,args){
                const project=new Project({
                    name:args.name,
                    description:args.description,
                    status:args.status,
                    clientId:args.clientId
                })
                return project.save();
            }
        }
}
})

module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation
})

//The following opens Graphiql:
//http://localhost:8000/graphql

//Making queries with GraphiQL
//run the following in the GraphiQL to get the name of client with id 1.
//{
    // client(id:"1"){
    //     name
    //   }
    // }

//Following will be the output:
// {
//     "data": {
//       "client": {
//         "name": "Tony Stark"
//       }
//     }
//   }

//That is the exact difference between graphql and rest api... we can have a very controlled environmnet with data and get data exactly what we want and as we want.
//For accessing everything you need to run following:   clients{
//     name
// }

//The query when it comes to relationships would be as follows:
// {
  
//     project(id:"4"){
//       name
//       client {
//         name
//       }
//     }
//   }

//Let's work on mongoDB now
//setup+connection
//compass is suggested for looking into db.
//connected to compass

//create a new client and return all the data
// mutation {
//     addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
//       id
//       name
//       email
//       phone
//     }
//   }
//go to gist traversy for all these queries. For mutation do not start with {}. also import the models without destructuring