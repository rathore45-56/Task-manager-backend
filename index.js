const express= require('express');
const app=express();
//Using inbuilt Middleware(express.json())
app.use(express.json());
const router= require('./routes/taskRoutes.js');
app.use('/api',router);

app.listen(3000, () => {
    console.log("Server running 🚀");
});
