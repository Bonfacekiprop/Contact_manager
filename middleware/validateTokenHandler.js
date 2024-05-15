const asyncHandler = require('express-asyncHandler');
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next) =>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startswith("Bearer ")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded) =>{
            if(err) {
                res.status(401);
                throw new Error("User not authorized to access")
            }
            console.log(decoded);
        })

}})

module.exports = validateToken;