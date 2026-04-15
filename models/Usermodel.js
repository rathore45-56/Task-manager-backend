const {Schema,model}=require('mongoose');
const User= new Schema({
       name:
       {
       type:String,
       required:true
       },
       email:
       {
       type:String,
       required:true
       },
       password:
       {
       type:String,
       required:true
       },
       address:
       {
       type:String,
       required:true
       },
    },
       {
        timestamps:true,
       }
);
const UserModel=model('users',User);
module.exports=UserModel;