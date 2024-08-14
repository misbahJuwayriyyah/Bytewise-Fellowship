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