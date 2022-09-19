const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const connectDB = require("./config/db");

// load env variables
dotenv.config({ path: "./config/config.env" });
connectDB();

// index Routes
app.use("/", require("./routers/index"));

app.listen(process.env.PORT | 3000, () => {
  console.log("Server is up and running");
});
