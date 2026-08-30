import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  hallTicketNumber: {
    type: String,
    required: true,
    unique: true,
  },

  studentName: {
    type: String,
    required: true,
  },

  class: {
    type: String,
    required: true,
    enum: ["11", "12"],
  },

  physics: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  chemistry: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  biology: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  mathematics: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
