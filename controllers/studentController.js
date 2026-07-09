const students = [
  {
    id: 1,
    name: "Harrison",
    email: "onigbaeminent@gmail.com",
    department: "Electrical Engineering",
    level: 400,
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
    department: "Computer Science",
    level: 300,
  },
  {
    id: 3,
    name: "Mary",
    email: "mary@example.com",
    department: "Mechanical Engineering",
    level: 200,
  },
];

const getAllStudents = (req, res) => {
  res.render("students/index", {
    students,
  });
};

const showRegistrationForm = (req, res) => {
  res.render("students/new");
};

const createStudent = (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    level: req.body.level,
  };

  students.push(newStudent);

  res.redirect("/students");
};

module.exports = {
  getAllStudents,
  showRegistrationForm,
  createStudent,
};
