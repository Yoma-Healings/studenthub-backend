const express = require('express');
const app = express();
const PORT = 3000;

// import the student routes
const studentRoutes = require('./routes/studentRoutes');

// use the student routes
app.use('/students', studentRoutes);

// home route
app.get('/', (req, res) => {
    res.send('welcome to my server');
});
 

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
    console.log(`server is running on port ${PORT}`);
});