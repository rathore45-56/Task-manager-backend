const {Schema,model} = require("mongoose");

const TaskSchema = new Schema(
    {
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