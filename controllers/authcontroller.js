const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const User=require('../models/Usermodel');
const { get } = require('../routes/Userroute');

//Contoller For SignUp
const SignUp= async(req,res)=>{
    try{
        const{name,email,password,address}=req.body;
        if(!name||!email||!password||!address)
        {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const Userexist=await User.findOne({email});
        if(Userexist)
        {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);
       const newUser=new User({name,email,password:hashedpassword,address});
       await newUser.save();
          if(newUser)
          {
            res.status(201).json({
               _id:newUser.id,
               name:newUser.name,
               email:newUser.email,
               token:generatetoken(newUser._id)
            });
        }
        else{
            res.status(400)
            throw new Error("Invalid User Data");
        }
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }

    };
  const SignIn= async(req,res)=>{
    try{
      const {email,password}=req.body;
      const emailexist= await User.findOne({email});
      if((emailexist)&&(await bcrypt.compare(password,emailexist.password)))
      {
         res.status(201).json({
            _id:emailexist.id,
            name:emailexist.name,
            email:emailexist.email,
            token:generatetoken(emailexist._id)
         })
      }
    
   else
        res.status(400).json({
            success: false,
            message:"Invalid Crdentials"
        });
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
  };
  const getme=async(req,res)=>{
            const{_id,name,email,address}=await User.findById(req.user.id);
           res.status(200).json({
            id:_id,
            name,
            email,
            address
           })
  }
  const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,
        {expiresIn: "25D",

        }
    )
  }
  module.exports={SignIn,SignUp,getme};
