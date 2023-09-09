const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = await req.headers.Authorization || req.headers.authorization ;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.SECRET_TOKEN, (err,decoded)=>{
            if(err){
                res.status(401).json({message:"User not authorized"})
            }
            //console.log("decoded user",decoded.user)
            req.user = decoded.user;
            //console.log("before next")
            next();
        })
        if(!token){
            res.status(401).json({message:"User not authorized or token is missing"})
        }
    }
})

module.exports = validateToken;