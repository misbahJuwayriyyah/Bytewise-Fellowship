//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
import mongoose from "mongoose";
async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MONGO-DB");
    }
}
async function disconnect(){
    try {
        await mongoose.disconnect();
    } catch (error) {
        throw new Error("Couldn't disconnect from DB");
    }
}

export {connectToDB,disconnect};