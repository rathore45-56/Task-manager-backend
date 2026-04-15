const express = require("express");
const connectDB = require("./config/db");

const app = express();
const dotenv=require('dotenv');
dotenv.config();
// 🔥 Middleware (VERY IMPORTANT)
app.use(express.json());

// 🔥 Connect Database
connectDB();

// 🔥 Routes
const routes = require("./routes/taskRoutes");
const route=require("./routes/Userroute");
app.use("/api", routes);
app.use("/api",route);

// 🔥 Server
const PORT=3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});
