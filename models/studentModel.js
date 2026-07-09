let students = [
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

const getAllStudents = () => {
  return students;
};

const getStudentById = (id) => {
  return students.find((student) => student.id === id);
};

const addStudent = (student) => {
  students.push(student);
};

const updateStudent = (id, updatedStudent) => {
  const student = students.find((student) => student.id === id);

  if (!student) return null;

  student.name = updatedStudent.name;
  student.email = updatedStudent.email;
  student.department = updatedStudent.department;
  student.level = updatedStudent.level;

  return student;
};

const deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === id);

  if (index === -1) return false;

  students.splice(index, 1);

  return true;
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
