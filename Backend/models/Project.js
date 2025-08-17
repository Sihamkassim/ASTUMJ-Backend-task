
const mongoose = require("mongoose");

// DEFINE PROJECT SCHEMA
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["ongoing", "completed"], default: "ongoing" }
});

// EXPORT MODEL
module.exports = mongoose.model("Project", projectSchema);
