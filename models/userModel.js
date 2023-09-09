const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Name is required !"]
    },
    email:{
        type:String,
        required:[true,"Email is required !"],
        unique:[true,"Email address already taken"]
    },
   password:{
    type:String,
    required:[true,"Phone numer is Required !"]
   }
},
{
    timestamps: true
})


module.exports = mongoose.model("User-Detail",userSchema)