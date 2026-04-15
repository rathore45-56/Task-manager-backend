const express=require('express');
const router=express.Router();
const {SignIn,SignUp}=require('../controllers/authcontroller');
router.post('./signup',SignUp);
router.post('./signin',SignIn);
module.exports=router;