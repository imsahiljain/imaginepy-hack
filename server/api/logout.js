const express = require("express");
const router = express.Router();

/*
 * Logout Data Access Object, where API call to delete user session is called
 */

//GET REQUEST
//for user deletion
router.get("/logoutuser", async (req, res) => {
  //deleting cookies saved in user's laptop
  res.clearCookie("usertype");
  res.clearCookie("username");
  res.clearCookie("email");
  res.json("/");
});
module.exports = router;
