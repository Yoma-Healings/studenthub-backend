const express = require('express');
const app = express();
const PORT = 3000;
 // import the student routes
const studentRoutes = require('./routes/studentRoutes');

//express using ejs
app.set("view engine", "ejs");

// home route
app.get("/", (req, res) => {
  res.render("index", {
    university: "Petroleum Training Institute",

    totalStudents: 1250,

    totalCourses: 45,

    totalLecturers: 82,
  });
});
 

// use the student routes
app.use('/students', studentRoutes);
// using public folder for static files
app.use(express.static('public'));

//courses route
app.get('/courses', (req, res) => {
    res.send('welcome to my courses page');
});

//lecturers route
app.get('/lecturers', (req, res) => {
    res.send('welcome to my lecturers page');
});

//admin route
app.get('/admin', (req, res) => {
    res.send('welcome to my admin page');
});

// start the server
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});