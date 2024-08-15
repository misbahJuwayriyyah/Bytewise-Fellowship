const mongoose=require('mongoose');

//mongoose schema is not related to graphql schema
//Database->mongoose layer (fields for db connection) -> graphql api

const ClientSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:String,
    },
    email:{
        type:String,
    },
});

module.exports=mongoose.model('Client',ClientSchema);