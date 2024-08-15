const mongoose=require('mongoose');

//mongoose schema is not related to graphql schema
//Database->mongoose layer (fields for db connection) -> graphql api

const ProjectSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['Not Started','In Progress','Done']
    },
    clientId:{
        //remember the following for dynamic entries
        type:mongoose.Schema.Types.ObjectId, //_id in the mongodb
        ref:'Client',//relationship
    }
});

module.exports=mongoose.model('Project',ProjectSchema);

//now import these models to schema.js