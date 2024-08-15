const mongoose=require('mongoose');

const connectionDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Cannot connect to mongoose. \n ${error}`);
    }
};
const disconnectionDB=async()=>{
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(`Cannot disconnect to mongoose. \n ${error}`);
    }
};

module.exports = {connectionDB,disconnectionDB};
