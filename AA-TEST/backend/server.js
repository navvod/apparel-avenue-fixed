const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser"); //importing neccessary files
require("dotenv").config();

const app = express(); //creating app

// create a server
const PORT = process.env.PORT || 8500;

//connect server
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});

//creating a database
const URL = process.env.MONGODB_URL;
mongoose.connect(URL);

//connecting database
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection success");
});

//json format
app.use(cors());
app.use(bodyParser.json());

//router path manager
const managerRouter = require("./routes/managerRoutes.js");
app.use("/manager", managerRouter);
