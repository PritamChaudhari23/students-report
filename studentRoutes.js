const express = require("express");
const path = require("path");

const { getStudentResult, addStudent } = require("./studentController");

const router = express.Router();
router.get("/results/:hallTicketNumber", getStudentResult);

router.post("/students", addStudent);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

router.get("/add-student", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add-student.html"));
});

module.exports = router;
