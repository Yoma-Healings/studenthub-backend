const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// Display all students
router.get("/", studentController.getAllStudents);

// Display registration form
router.get("/new", studentController.showRegistrationForm);

// Create a new student
router.post("/", studentController.createStudent);

// Display a single student
router.get("/:id", (req, res) => {
  const student = {
    id: req.params.id,
    name: "Harrison",
    department: "Electrical Engineering",
  };

  res.json(student);
});

module.exports = router;
