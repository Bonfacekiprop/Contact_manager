const asyncHandler = require("express-async-handler"); 

//@desc Get contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Get all contacts"});
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler( async (req,res) => {
    res.status(200).json({message:`Get  contact for ${req.params.id}`});
});

//@desc create contact
//@route post /api/contacts/:id
//@access public

const createContact = asyncHandler( async (req,res) => {
    console.log("the request of body is: " , req.body);
    //destructuring
    const {name, email, phone} = req.body;
    //throw error if null
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:"create contacts"});
});

//@desc update contact
//@route put /api/contacts/:id
//@access public

const updateContact = asyncHandler( async (req,res) => {
    res.status(200).json({message:`update contact for ${req.params.id}`});
});

//@desc delete contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler (async (req,res) => {
    res.status(200).json({message:`delete contact for ${req.params.id}`});
});
module.exports = {getContacts,deleteContact,getContact,createContact,updateContact}