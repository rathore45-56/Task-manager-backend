const mongoose = require("mongoose");
const connectedDB=async()=>{
     try {
        await mongoose.connect(`mongodb+srv://us971968077_db_user:HWpBcUPEdeSBSgHH@clusterone.kuv9sss.mongodb.net/`);
        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("Error connecting DB:", error.message);
        process.exit(1);
    }
};
module.exports = connectedDB;
