// REQUIRE PROJECTS ARRAY FROM DATA FILE
const projects = require("../data/Projects");

// FUNCTION TO GET NEXT ID
function getNextId() {
    if (projects.length === 0) return 1;
    return Math.max(...projects.map(p => p.id)) + 1;
}

// FUNCTION TO GET ALL PROJECTS
function getAllProjects() {
    return projects;
}

// FUNCTION TO GET ONE PROJECT BY ID
function getProjectById(id) {
    return projects.find(p => p.id === id);
}

// FUNCTION TO ADD A NEW PROJECT
function addProject(project) {
    project.id = getNextId(); // SET ID BASED ON CURRENT MAX
    projects.push(project);
    return project;
}

// FUNCTION TO UPDATE PROJECT
function updateProject(id, updatedData) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...updatedData };
        return projects[index];
    }
    return null;
}

// FUNCTION TO DELETE PROJECT
function deleteProject(id) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        return projects.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    getAllProjects,
    getProjectById,
    addProject,
    updateProject,
    deleteProject
};
