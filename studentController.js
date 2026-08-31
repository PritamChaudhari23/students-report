const Student = require("./Student");

const getStudentResult = async (req, res) => {
  try {
    const { hallTicketNumber } = req.query;

    const student = await Student.findOne({
      hallTicketNumber,
    });

    if (!student) {
      return res.status(404).send("Student not found");
    }

    const total =
      student.physics +
      student.chemistry +
      student.biology +
      student.mathematics;

    const percentage = (total / 400) * 100;

    const passingPercentage = 40;

    const result = percentage >= passingPercentage ? "PASS" : "FAIL";

    res.render("report", {
      student,
      total,
      percentage,
      result,
    });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).send("Server error");
  }
};

const addStudent = async (req, res) => {
  try {
    await Student.create(req.body);

    res.status(201).send("Student added successfully");
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(400).send("Failed to add student");
  }
};

module.exports = {
  getStudentResult,
  addStudent,
};
