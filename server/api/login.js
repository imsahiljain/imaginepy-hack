const logs = require("../models/users");
const express = require("express");
const router = express.Router();

/*
 * Login Data Access Object, where all API calls for user login are found
 */

//POST REQUEST
//Verifying user input from Database
router.post("/checkloguser", async (req, res) => {
  //retrieving values of user input
  const email = req.body.loginEmail;
  const password = req.body.loginPassword;
  console.log(`${email} ${password}`);
  //checking if user did not leave any field empty beforehand
  if (email == "" || password == "") {
    res.send(
      JSON.stringify({
        url: "",
        toaststatus: "info",
        additional: "Please fill all info!",
      })
    );
    return;
  }
  //checking if user is in db
  const checklogsfirst = await logs.findOne({
    email: email,
    password: password,
  });
  console.log(checklogsfirst);
  if (!checklogsfirst) {
    res.send(
      JSON.stringify({
        url: "",
        toaststatus: "error",
        additional: "Incorrect credentials !",
      })
    );
    return;
  } else {
    //saving values of retrieved user into cookies for later usage
    let tempUserType = checklogsfirst["usertype"];
    let tempUserName = checklogsfirst["firstname"];
    let tempEmail = checklogsfirst["email"];
    //setting cookie options
    let options = {
      maxAge: 86400000,
    };
    //setting name and time alive for each cookie
    res.cookie("usertype", tempUserType, options);
    res.cookie("username", tempUserName, options);
    res.cookie("email", tempEmail, options);
    //redirection
    switch (tempUserType) {
      case "doctor":
        return res.send(
          JSON.stringify({
            url: "/doctor",
            toaststatus: "success",
            additional: "Login Successful",
          })
        );
      case "patient":
        return res.send(
          JSON.stringify({
            url: "/patient",
            toaststatus: "success",
            additional: "Login Successful",
          })
        );
    }
  }
});
module.exports = router;
