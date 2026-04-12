const express = require("express");
const connectDB = require("./config/db");

const app = express();

// 🔥 Middleware (VERY IMPORTANT)
app.use(express.json());

// 🔥 Connect Database
connectDB();

// 🔥 Routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// 🔥 Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});
