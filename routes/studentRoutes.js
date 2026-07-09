//import express
const express = require('express');

//initialize the router
const router = express.Router();

//importing controller
const studentController = require("../controllers/studentController")

// home route
router.get("/", studentController.getAllStudents);

router.get("/:id", (req, res) => {
  const student = {
    id: req.params.id,
    name: "Harrison",
    department: "Electrical Engineering",
  };

  res.json(student);
});

//post route
router.post("/", (req, res) => {
  res.json({
    message: "Student registered successfully!",
  });
});



//export the router
module.exports = router;