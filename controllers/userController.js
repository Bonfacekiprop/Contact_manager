const asyncHandler = require("express-async-handler"); 
const User = require("../models/userModel")
//@desc register user
//@route POST /users/register
//@access public

const registerUser = asyncHandler( async (req,res) => {
    //destructuring username and password 
    const {username, email,password} = req.body;

    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User is already registered");
    }

    res.json({message:"register the user "});
});

//@desc login user
//@route POST /users/login
//@access public

const loginUser = asyncHandler( async (req,res) => {
    res.json({message:"login user "});
});

//@desc current user information
//@route GET /users/current
//@access public

const currentUser = asyncHandler( async (req,res) => {
    res.json({message:"current user information "});
});

module.exports = {registerUser,loginUser,currentUser};