const express=require('express');
const router= express.Router();

router.get('/',(req,res)=>{
    res.json({
       name:"Utkarsh",
       message:"Hello everyone"
    })
})
module.exports=router;