const studentModel = require("../models/studentModel");

// Get all students
const getAllStudents = (req, res) => {
  const students = studentModel.getAllStudents();

  res.render("students/index", {
    students,
  });
};

// Show registration form
const showRegistrationForm = (req, res) => {
  res.render("students/new");
};

// Create a new student
const createStudent = (req, res) => {
  const newStudent = {
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    level: req.body.level,
  };

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

  const updated = studentModel.updateStudent(id, req.body);

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
