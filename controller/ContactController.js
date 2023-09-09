
const asyncHandler = require('express-async-handler');
const contactSchema = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getAllContacts = asyncHandler(async(req,res) =>{
    
    const contactData = await contactSchema.find({user_id:req.user.id});
    res.status(200).json(contactData)
})


//@desc Create Contact
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async(req,res) =>{
    const {name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
   const contact = await contactSchema.create({
    name,email,phone,user_id:req.user.id
   })
    res.status(200).json(contact)
})

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async(req,res) =>{
    const contact = await contactSchema.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403).json({message:"User doesn't have permission to update other user's contat"})
    }
    const updateContact = await contactSchema.findByIdAndUpdate(req.params.id,
        req.body
    )
    res.status(200).json(updateContact)
})

//@desc Delete Contact
//@route Delete /api/contacts/:id
//@access private

const DeleteContact = asyncHandler(async (req,res) =>{
    const contact = await contactSchema.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403).json({message:"User doesn't have permission to delete other user's contat"})
    }
    const deletedContact = await contactSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({message:`Deleted contact contact suceesfully ${deletedContact.id}`})
})

//@desc Get Particular Contact
//@route GEt /api/contacts/:id
//@access private

const getIndividualConatct = asyncHandler(async(req,res) =>{
    const individualContact = await contactSchema.findById(req.params.id);
    if(!individualContact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(individualContact);
})

module.exports = {getAllContacts,createContact,updateContact,DeleteContact,getIndividualConatct}