const validateStudent = (student) => {
  const errors = [];

  // -------------------------
  // Name Validation
  // -------------------------
  if (!student.name || student.name.trim() === "") {
    errors.push("Full name is required.");
  } else {
    const name = student.name.trim();

    if (name.length < 3) {
      errors.push("Full name must be at least 3 characters.");
    }

    if (name.length > 100) {
      errors.push("Full name cannot exceed 100 characters.");
    }

    // Only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
      errors.push("Full name can only contain letters and spaces.");
    }
  }

  // -------------------------
  // Email Validation
  // -------------------------
  if (!student.email || student.email.trim() === "") {
    errors.push("Email is required.");
  } else {
    const email = student.email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }
  }

  // -------------------------
  // Department Validation
  // -------------------------
  if (!student.department || student.department.trim() === "") {
    errors.push("Department is required.");
  } else {
    const department = student.department.trim();

    if (department.length < 2) {
      errors.push("Department name is too short.");
    }

    if (department.length > 100) {
      errors.push("Department name is too long.");
    }
  }

  // -------------------------
  // Level Validation
  // -------------------------
  const level = Number(student.level);

  const validLevels = [100, 200, 300, 400, 500];

  if (!validLevels.includes(level)) {
    errors.push("Level must be 100, 200, 300, 400 or 500.");
  }

  return errors;
};

module.exports = validateStudent;
