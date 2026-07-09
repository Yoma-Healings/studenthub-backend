const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// Display all students
router.get("/", studentController.getAllStudents);

// Display registration form
router.get("/new", studentController.showRegistrationForm);

// Create a new student
router.post("/", studentController.createStudent);

router.get("/:id/edit", studentController.showEditForm);

router.post("/:id/edit", studentController.updateStudent);

router.get("/:id/delete", studentController.deleteStudent);
// Display a single student
router.get("/:id", studentController.getStudentById);

module.exports = router;
