const Task=require('../models/taskModels');

const createtask= async(req,res)=>{
    try{
        const {title}=req.body;
   const newTask= new Task({title});
    await newTask.save();
    if(!newTask)
    {
        res.status(404).json({
            Success:false,
            message:"No new task added"
        })
    }
     res.status(200).json({
        success:true,
        task:newTask
    })
}

     catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
};
const getTasks = async (req, res) => {
    try {
        const alltask= await Task.find();
        if(!alltask || alltask.length==0)
        {
            
        res.status(404).json({
            Success:false,
            message:"There is no task to display",
            error:"Found no task"
        })
        }
        res.status(201).json({
            success:true,
            tasks:alltask   
        })
    } catch (error) {
        res.status(500).json({
            success:false, 
            message: "Internal Server Error" });
    }
};

const updatedtask= async(req,res)=>{
    try{
    const {id}=req.params;
    const {title}=req.body;
    const updated=await Task.findByIdAndUpdate(id,{title},{new:true});
    if(!updated)
    {
        res.status(404).json({
            success:false,
            message:"No update",
            error:"No update happen"
        })
    }
    res.status(201).json({
        success:true,
        update:updated
    })
}
    catch(err)
    {
       res.status(500).json({
        success:false,
        message:"Internal server Error"
       })
    }

};
const deletedtask= async(req,res)=>{
    try{
    const {id}=req.params;
    const deleted=await Task.findByIdAndDelete(id);
    if(!deleted)
    {
        res.status(404).json({
            success:false,
            message:"No deletion",
            error:"Nothing is deleted"
        })
    }
    res.status(201).json({
        success:true,
        delete:deleted
    })
}
    catch(err)
    {
       res.status(500).json({
        success:false,
        message:"Internal server Error"
       })
    }

};
const markComplete = async (req, res) => {
    try {
        const {id}=req.params;
        const completed = await Task.findByIdAndUpdate(
            id,
            { completed: true },
            { new: true }
        );

        if (!completed) {
            return res.status(404).json({ message: "No Task Found to mark it complete" });
        }

        res.status(201).json({
         success:true,
         complete:completed   
        });
    } catch (error) {
        res.status(500).json({
            success:false, 
            message: "Internal Server Error" });
    }
};


module.exports = { createtask, getTasks, updatedtask, deletedtask, markComplete };