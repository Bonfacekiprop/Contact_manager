//@desc Get contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res) => {
    res.status(200).json({message:"Get all contacts"});
}

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

const getContact =(req,res) => {
    res.status(200).json({message:`Get  contact for ${req.params.id}`});
}

//@desc create contact
//@route post /api/contacts/:id
//@access public

const createContact =(req,res) => {
    console.log("the request of body is: " , req.body);
    //destructuring
    const {name, email, phone} = req.body;
    //throw error if null
    if(!name || !email || !phone){
        res.status(404);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:"create contacts"});
}

//@desc update contact
//@route put /api/contacts/:id
//@access public

const updateContact =(req,res) => {
    res.status(200).json({message:`update contact for ${req.params.id}`});
}

//@desc delete contact
//@route delete /api/contacts/:id
//@access public

const deleteContact =(req,res) => {
    res.status(200).json({message:`delete contact for ${req.params.id}`});
}
module.exports = {getContacts,deleteContact,getContact,createContact,updateContact}