const express = require("express");
const userRouter = express.Router();
const {registerUser,loginUser,currentUser} = require("../controller/UsersController");
const validateToken = require("../middleware/validatetoken")

//Register User 
userRouter.route("/register").post(registerUser);

//Login User 
userRouter.route("/login").post(loginUser);

//Get Current User Information 
userRouter.get("/current",validateToken,currentUser);

module.exports = userRouter; 
