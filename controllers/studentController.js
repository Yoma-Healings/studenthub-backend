const studentModel = require("../models/studentModel");
const validateStudent = require("../validators/studentValidator");

// Get all students
const getAllStudents = (req, res) => {
  const students = studentModel.getAllStudents();

  res.render("students/index", {
    students,
  });
};

// Show registration form
const showRegistrationForm = (req, res) => {
  res.render("students/new", {
    errors: [],
    student: {},
  });
};

// Create a new student
const createStudent = (req, res) => {
  const newStudent = {
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    level: req.body.level,
  };

  // Validate the input
  const errors = validateStudent(newStudent);

  // Check if email already exists
  const existingStudent = studentModel.getStudentByEmail(newStudent.email);

  if (existingStudent) {
    errors.push("A student with this email already exists.");
  }

  // If validation fails
  if (errors.length > 0) {
    return res.status(400).render("students/new", {
      errors,
      student: newStudent,
    });
  }

  // Save to database
  studentModel.addStudent(newStudent);

  res.redirect("/students");
};

// Get one student
const getStudentById = (req, res) => {
  const id = Number(req.params.id);

  const student = studentModel.getStudentById(id);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.render("students/show", {
    student,
  });
};

// Show edit form
const showEditForm = (req, res) => {
  const id = Number(req.params.id);

  const student = studentModel.getStudentById(id);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.render("students/edit", {
    student,
  });
};

// Update student
const updateStudent = (req, res) => {
  const id = Number(req.params.id);

  const updatedStudent = {
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    level: req.body.level,
  };

  // Validate the input
  const errors = validateStudent(updatedStudent);

  // Check if another student already has this email
  const existingStudent = studentModel.getStudentByEmail(updatedStudent.email);

  if (existingStudent && existingStudent.id !== id) {
    errors.push("A student with this email already exists.");
  }

  if (errors.length > 0) {
    return res.status(400).render("students/edit", {
      errors,
      student: {
        id,
        ...updatedStudent,
      },
    });
  }

  const updated = studentModel.updateStudent(id, updatedStudent);

  if (!updated.changes) {
    return res.status(404).send("Student not found");
  }

  res.redirect(`/students/${id}`);
};

// Delete student
const deleteStudent = (req, res) => {
  const id = Number(req.params.id);

  const deleted = studentModel.deleteStudent(id);

  if (!deleted.changes) {
    return res.status(404).send("Student not found");
  }

  res.redirect("/students");
};

module.exports = {
  getAllStudents,
  showRegistrationForm,
  createStudent,
  getStudentById,
  showEditForm,
  updateStudent,
  deleteStudent,
};