const User=require('../models/taskModels');

const createtask= async(req,res)=>{
    try{
    const {title}=req.body;
    const newuser= new User({title});
    await newuser.save();
     res.status(200).json({
        success:true,
        user:newuser
    })
}

     catch(err)
    {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
const getTasks = async (req, res) => {
    try {
        const tasks = await User.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createtask, getTasks };