const asyncHandler = require("express-async-handler"); 
const Contact = require("../models/contactModel");

//@desc Get contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
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
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

//@desc update contact
//@route put /api/contacts/:id
//@access public

const updateContact = asyncHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new: true}
    );
    res.status(200).json(updateContact);
});

//@desc delete contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler (async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();

    res.status(200).json(contact);
});
module.exports = {getContacts,deleteContact,getContact,createContact,updateContact}