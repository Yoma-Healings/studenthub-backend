const Database = require("better-sqlite3");
const path = require("path");

// Path to the SQLite database
const dbPath = path.join(__dirname, "../database/studenthub.db");

// Open the database
const db = new Database(dbPath);

// Enable foreign keys (good practice)
db.pragma("foreign_keys = ON");

console.log("✅ Connected to StudentHub SQLite Database");

module.exports = db;
