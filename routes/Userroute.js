const express=require('express');
const router=express.Router();
const {SignIn,SignUp,getme}=require('../controllers/authcontroller');
const {protectroute}=require('../middlewares/authMiddlewares')
router.post('/signup',SignUp);
router.post('/signin',SignIn);
router.get('/getme',protectroute,getme);
module.exports=router;