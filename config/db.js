const mongoose = require("mongoose");
const dotenv= require('dotenv');
dotenv.config();
const connectedDB=async()=>{
     try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("Error connecting DB:", error.message);
        process.exit(1);
    }
};
module.exports = connectedDB;
