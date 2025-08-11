
const projectService = require("../services/ProjectService");

// GET ALL PROJECTS
function getProjects(req, res) {
    res.json(projectService.getAllProjects());
}

// GET ONE PROJECT
function getProject(req, res) {
    const id = parseInt(req.params.id);
    const project = projectService.getProjectById(id);
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
}

// CREATE NEW PROJECT// CREATE NEW PROJECT
function createProject(req, res) {
    const { name, description, status } = req.body;
    if (!name || !description || !status) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const newProject = { name, description, status };
    const created = projectService.addProject(newProject);
    res.status(201).json(created);
}


// UPDATE PROJECT
function updateProject(req, res) {
    const id = parseInt(req.params.id);
    const updatedProject = projectService.updateProject(id, req.body);
    if (!updatedProject) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json(updatedProject);
}

// DELETE PROJECT
function deleteProject(req, res) {
    const id = parseInt(req.params.id);
    const deleted = projectService.deleteProject(id);
    if (!deleted) {
        return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted" });
}

module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
};
