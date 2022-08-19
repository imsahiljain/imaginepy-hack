const logs = require("../models/users");
const express = require("express");
const router = express.Router();
const pdfTemplate = require("../temp");
const pdf = require("html-pdf");
/*
 * Login Data Access Object, where all API calls for user login are found
 */

//POST REQUEST
//Verifying user input from Database
router.post("/create-report", async (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

router.get("/fetch-report", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
module.exports = router;
