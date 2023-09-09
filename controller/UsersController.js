const asyncHandler = require('express-async-handler');
const userSchema = require("../models/userModel");
const bcrypt = require('bcrypt');
const {  mongoose } = require('mongoose');
const jwt = require("jsonwebtoken");
//@desc Register User
//@route POST /api/users
//@access public

const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400).json({message:"All fields are mandatory"});
        //throw new Error("All fields are mandatory");
    }
    const registeredUser = await userSchema.findOne({email});
    if(registeredUser){ 
        res.status(400);
        throw new Error("User already registred");
    }

    //Hash Password
    const HashPwd = await bcrypt.hash(password,10);
    //Create user 
    const NewUser = await userSchema.create({
        username,
        email,
        password:HashPwd
    })

    if(NewUser){
        res.status(200).json({_id:NewUser.id,email:NewUser.email})
    }
    else{
        res.status(400).json({message:"User data not valid"})
    }
})

//@desc Login User
//@route POST /api/users
//@access public

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400).json({message:"All fields are mandatory"});
    }
    const user = await userSchema.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accssToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.SECRET_TOKEN,
        {expiresIn:"20m"})
        res.status(200).json({accssToken})
    }
    else{
        res.status(400).json({message:"email or Password not valid"})
    }
    console.log("user",user)
    //res.json({message: `Login User`})
})

//@desc Get Current User Information
//@route GET /api/users
//@access private

const currentUser = asyncHandler(async(req,res)=>{
    console.log("Inside current user")
    const user = await req.user;
    console.log("User : ",user)
     if(user){
        res.status(200).json(user);
     }else{
        res.status(400).json({message:"email or Password not valid"})

     }

})


module.exports = {registerUser,loginUser,currentUser}