const jwt=require('jsonwebtoken');
const becrypt=require('bcryptjs');
const User=require('../models/Usermodel');

//Contoller For SignUp
const SignUp= async(req,res)=>{
    try{
        const{name,email,password,address}=req.body;
        if(!name||!email||!password||!address)
        {
            res.status(404)
            throw new Error("*All fields are Required")
        }
        const Userexist=await User.findOne({email});
        if(Userexist)
        {
            res.status(400)
            throw new Error("User already exist in Database");
        }
        const salt= await bcrypt.genSalt(10);
        const hashedpassword= await bcrypt.hash(password,salt);
        const newUser= new User({name,email,hashedpassword,address})
        await newUser.save();
        if(newUser)
        {
            res.status(200).json({
                name:newUser.name,
                email:newUser.email,
            })
        }
        else
        {
            res.status(400)
            throw new Error("Invalid User Data");
        }
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            message:"Internal Server Error"
        })
    }

    };
  const SignIn= async(req,res)=>{
    try{
      const {email,password}=req.body;
      const emailexist= await User.findOne({email});
      if(!emailexist|| !await bcrypt.compare(password,emailexist.password))
      {
         res.status(404).json({
            success:false,
            message:"Invalid Credentials"
         });
      }
      const token = jwt.sign(
            { id: emailexist._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            success: true,
            token
        });
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
  };
  module.exports={SignIn,SignUp}
