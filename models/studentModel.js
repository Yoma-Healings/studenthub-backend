const db = require("../config/database");

// Get all students
const getAllStudents = () => {
  const stmt = db.prepare("SELECT * FROM students ORDER BY id");
  return stmt.all();
};

// Get one student
const getStudentById = (id) => {
  const stmt = db.prepare("SELECT * FROM students WHERE id = ?");
  return stmt.get(id);
};

// Add student
const addStudent = (student) => {
  const stmt = db.prepare(`
        INSERT INTO students (name, email, department, level)
        VALUES (?, ?, ?, ?)
    `);

  return stmt.run(
    student.name,
    student.email,
    student.department,
    student.level,
  );
};

// Update student
const updateStudent = (id, student) => {
  const stmt = db.prepare(`
        UPDATE students
        SET
            name = ?,
            email = ?,
            department = ?,
            level = ?
        WHERE id = ?
    `);

  return stmt.run(
    student.name,
    student.email,
    student.department,
    student.level,
    id,
  );
};

// Delete student
const deleteStudent = (id) => {
  const stmt = db.prepare("DELETE FROM students WHERE id = ?");
  return stmt.run(id);
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
