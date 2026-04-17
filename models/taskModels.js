const {Schema,model} = require("mongoose");
const mongoose=require('mongoose');

const TaskSchema = new Schema(
    {
        User:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
const TaskModel= model('Tasks',TaskSchema)
module.exports = TaskModel;