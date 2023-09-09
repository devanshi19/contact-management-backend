const mongoose = require("mongoose");

const dbConnect = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Databse Successfully Connected",connect.connection.host,connect.connection.name)
    }
    catch(err){
        console.log("Error While Connection",err);
        process.exit(1)
    }
    
}
module.exports = dbConnect;