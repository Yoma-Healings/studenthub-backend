// Import Express
const express = require("express");
const app = express();

// Port
const PORT = 3000;

// Import Routes
const studentRoutes = require("./routes/studentRoutes");

// ===============================
// App Configuration
// ===============================

// Set EJS as the view engine
app.set("view engine", "ejs");

// ===============================
// Middleware
// ===============================

// Parse form data (must come before routes)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// ===============================
// Routes
// ===============================

// Home Route
app.get("/", (req, res) => {
  res.render("index", {
    university: "Petroleum Training Institute",
    totalStudents: 1250,
    totalCourses: 45,
    totalLecturers: 82,
  });
});

// Student Routes
app.use("/students", studentRoutes);

// Courses Route
app.get("/courses", (req, res) => {
  res.send("Welcome to my courses page");
});

// Lecturers Route
app.get("/lecturers", (req, res) => {
  res.send("Welcome to my lecturers page");
});

// Admin Route
app.get("/admin", (req, res) => {
  res.send("Welcome to my admin page");
});

// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
