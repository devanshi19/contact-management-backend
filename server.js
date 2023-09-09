const express = require("express");
const errorHandle = require("./middleware/errorHandle");
const connectDB = require("./config/dbConnection")

const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("project run on port",`${port}`)
})

connectDB();
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandle);