const logs = require("../models/users");
const express = require("express");
const router = express.Router();

/*
 * Register Data Access Object, where all API calls for registration are called
 */

//POST REQUEST
//Verifying user input from Database
router.post("/checkreguser", async (req, res) => {
  //retrieving all user input
  const firstname = req.body.registerFirstName;
  const lastname = req.body.registerLastName;
  const email = req.body.registerEmail;
  const password = req.body.registerPassword;
  const type = req.body.registerType;

  //checking if user did not leave any field empty
  if (
    firstname == "" ||
    lastname == "" ||
    email == "" ||
    password == "" ||
    type == ""
  ) {
    res.send(
      JSON.stringify({
        url: "",
        toaststatus: "info",
        additional: "Please fill all info!",
      })
    );
    return;
  } else {
    //quick check if user exists in database
    let checklogsfirst = await logs.exists({ email: email });
    if (checklogsfirst) {
      res.send(
        JSON.stringify({
          url: "",
          toaststatus: "info",
          additional: "User already exists !",
        })
      );
      return;
    } else {
      let tempUserType = type;
      let tempUserName = firstname;
      let tempEmail = email;
      //setting name and time alive for each cookie
      res.cookie("usertype", tempUserType, { maxAge: 86400000 });
      res.cookie("username", tempUserName, { maxAge: 86400000 });
      res.cookie("email", tempEmail, { maxAge: 86400000 });
      //saving new user to database
      let platform = new logs({
        usertype: type,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      platform = await platform.save();
      //redirecting
      switch (type) {
        case "doctor":
          return res.send(
            JSON.stringify({
              url: "/doctor",
              toaststatus: "success",
              additional: "Registration Successful",
            })
          );
        case "patient":
          return res.send(
            JSON.stringify({
              url: "/patient",
              toaststatus: "success",
              additional: "Registration Successful",
            })
          );
      }
    }
  }
});

module.exports = router;
