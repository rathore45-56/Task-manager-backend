const jwt=require('jsonwebtoken');
const User=require('../models/Usermodel')

const protectroute=async(req,res)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        try{
        token=req.headers.authorization.split(' ')[1];
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user=await User.findById(decoded.id).select('-password');
        console.log(req.headers.authorization);
        next();
        }
        catch(err)
        {
            console.log("Error");
            res.status(401)
            throw new Error("Not Authorized");
        }
    }
    if(!token)
    {
        res.status(401)
        throw new Error("Not Authorized, No token");
    }
};
module.exports={protectroute}