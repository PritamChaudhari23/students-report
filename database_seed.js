const connectDB = require("./config");
const students = require("./data/student_report_seed.json");
const Student = require("./Student");

const seedDatabase = async () => {
  try {
    await connectDB();
    await Student.deleteMany({});
    await Student.insertMany(students);
    console.log("Student data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
