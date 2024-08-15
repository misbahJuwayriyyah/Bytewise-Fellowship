//In graphQL data can be anything
const {projects,clients}=require('../sampleData');
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList}=require('graphql');

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
                return clients.find(client=>client.id===parent.clientId)
            }
        }
    })
});

//queries - root query
const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        clients:{
            type:new GraphQLList(ClientType),
            resolve(parent,args){
                return clients
            }
        },
        client:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //we will put mongoose function here
                return clients.find(client=>client.id===args.id)
            }
        },
        projects:{
            type:new GraphQLList(ProjectType),
            resolve(parent,args){
                return projects
            }
        },
        project:{
            type:ProjectType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return projects.find(project=>project.id===args.id)
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query:RootQuery
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