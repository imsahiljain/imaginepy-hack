/*
 *VARIABLE DECLARATION SECTION
 */
const express = require("express");
const env = require("dotenv").config({ path: "./.env" });
//to connect to mongodb
const mongoose = require("mongoose");
//to interract with react appplication
const cors = require("cors");
//for sessions and cookies
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
//using express
const app = express();
//DAOs, aka our connections to the database
const login = require("./api/login");
const register = require("./api/register");
const logout = require("./api/logout");
//reading port from .env file, or set default port
const currentport = process.env.PORT || 5000;
// const multer = require("multer");
// const upload = multer();

const pdfTemplate = require("./temp");
const pdf = require("html-pdf");

//for whitelisting our react project
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

/*
 *CONNECTION TO MONGODB SECTION
 */
mongoose
  .connect(process.env.CLUSTER_DB_URI + "")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB!", err));

/*
 *MIDDLEWARES SECTION
 */
//setting middlewares for session and cookie
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors(corsOptions));
// for parsing multipart/form-data
// app.use(upload.array());
app.use(express.static("public"));
//used to parse json
app.use(express.json());
//used to access data access object (DAO)
app.use("/api/login", login);
app.use("/api/register", register);
app.use("/api/logout", logout);

/*
 *setting port for our backend to run on
 */
app.listen(currentport, () => {
  console.log("Backend server is ON!");
  console.log(`Listening on port: ${currentport}`);
});
