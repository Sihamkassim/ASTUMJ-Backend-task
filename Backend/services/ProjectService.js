// IMPORT MODEL
const Project = require("../models/Project");

// SERVICE FUNCTIONS TO HANDLE DATA LOGIC
async function getAllProjects() {
  return await Project.find();
}

async function getProjectById(id) {
  return await Project.findById(id);
}

async function createProject(data) {
  const project = new Project(data);
  return await project.save();
}

async function updateProject(id, data) {
  return await Project.findByIdAndUpdate(id, data, { new: true });
}

async function deleteProject(id) {
  return await Project.findByIdAndDelete(id);
}

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
