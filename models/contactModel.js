const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User-Detail"
    },
    name:{
        type:String,
        required:[true,"Please add contact name"]
    },
    email:{
        type:String,
        required:[true,"Please add contact email"]
    },
    phone:{
        type:String,
        required:[true,"Please add contact phone number"]
    },
},
{
    timestamps: true
}
)
module.exports = mongoose.model("Contact-detail",contactSchema)