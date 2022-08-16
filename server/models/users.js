const mongoose = require("mongoose");

/*
 * User Model, information we will be getting and setting from database to user and vice versa
 */

//Schema, all needed information
const userSchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Specifying which cluster from Mongodb database
const userModel = mongoose.model("users", userSchema, "users");
module.exports = userModel;
