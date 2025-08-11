
const API_URL = "http://localhost:5000/api/projects";

// FUNCTION TO FETCH AND DISPLAY PROJECTS
async function fetchProjects() {
    const res = await fetch(API_URL);
    const projects = await res.json();
    const list = document.getElementById("projectList");
    list.innerHTML = "";
    projects.forEach(project => {
        const li = document.createElement("li");
        li.textContent = `${project.name} - ${project.status}`;
        list.appendChild(li);
    });
}

// FUNCTION TO HANDLE FORM SUBMISSION
document.getElementById("projectForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, status })
    });

    document.getElementById("projectForm").reset();
    fetchProjects();
});

// FETCH PROJECTS ON PAGE LOAD
fetchProjects();
