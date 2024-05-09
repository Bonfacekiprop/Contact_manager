const express = require("express");
const errorHandler = require("./middleware/errorhandle.js");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // body parser 
app.use(errorHandler); // error handler

app.use("/api/contacts",require("./routes/contactRoutes.js"));
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});

  