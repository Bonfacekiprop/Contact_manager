const express = require("express");
const errorHandler = require("./middleware/errorhandle.js");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(express.json()); // body parser 
app.use(errorHandler); // error handler

app.use("/api/contacts",require("./routes/contactRoutes.js"));
app.use("/api/users",require("./routes/userRoutes.js"));

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});

  