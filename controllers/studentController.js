const getAllStudents = (req, res) => {
  const students = [
    {
      id: 1,
      name: "Harrison",
      department: "Electrical Engineering",
      level: 400,
    },
    {
      id: 2,
      name: "John",
      department: "Computer Science",
      level: 300,
    },
    {
      id: 3,
      name: "Mary",
      department: "Mechanical Engineering",
      level: 200,
    },
  ];

  res.render("students/student", {
    students,
  });
};

module.exports = {
  getAllStudents,
};
