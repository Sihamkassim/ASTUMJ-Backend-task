// IMPORT SERVICE
const service = require("../services/projectService");

// DEFINE CONTROLLERS THAT TALK TO SERVICE AND RETURN RESPONSE
async function getAll(req, res) {
  const projects = await service.getAllProjects();
  res.json(projects);
}

async function getOne(req, res) {
  const project = await service.getProjectById(req.params.id);
  res.json(project);
}

async function create(req, res) {
  const project = await service.createProject(req.body);
  res.json(project);
}

async function update(req, res) {
  const project = await service.updateProject(req.params.id, req.body);
  res.json(project);
}

async function remove(req, res) {
  await service.deleteProject(req.params.id);
  res.json({ message: "Project deleted" });
}

module.exports = { getAll, getOne, create, update, remove };
