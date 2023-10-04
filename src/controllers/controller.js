import createTask from "../modules/taskFactory";
import createProject from "../modules/projectFactory";
import {
  addTaskToProjectTasks,
  addProjectToProjectList,
  getCurrentProject,
  setCurrentProject,
  removeProjectFromProjectList,
  projectList,
} from "../models/model";
import {
  getElement,
  createProjectElement,
  renderTasksFromCurrentProject,
  renderProjectsFromProjectList,
  createDefaultProjectElement,
} from "../views/view";

const addTodo = () => {
  const form = getElement(".task-form");
  const titleInput = getElement('[name="task"]');
  const descriptionInput = getElement('[name="description"]');
  const dateInput = getElement('[name="date"]');
  const colorInput = getElement('[name="colors"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const project = getCurrentProject();

    const task = createTask(
      titleInput.value,
      descriptionInput.value,
      dateInput.value,
      colorInput.value,
      project
    );

    addTaskToProjectTasks(project, task);
    renderTasksFromCurrentProject();
    // printTasksFromProject(project);

    form.reset();
  });
};

const addProject = () => {
  const form = getElement(".project-form");
  const titleInput = getElement('[name="project-title"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (titleInput.value === "Default") {
      alert("Use other name!");
      form.reset();
      return;
    }
    const project = createProject(titleInput.value);
    addProjectToProjectList(project);
    createProjectElement(project);

    addProjectListeners();

    form.reset();
  });
};

const addDefaultProject = () => {
  // Temp solution
  const temp = createProject("Default");
  addProjectToProjectList(temp);
  createDefaultProjectElement(temp);
  setCurrentProject(temp.getId());
};

const selectProjectIdOnClick = (e) => {
  const projectId = e.target.dataset.projectId;
  setCurrentProject(projectId);
  renderTasksFromCurrentProject();
};

const removeProjectOnClick = (e) => {
  const projectId = e.target.dataset.projectId;
  removeProjectFromProjectList(projectId);
  setCurrentProject(projectList[0].getId());
  renderProjectsFromProjectList();
};

const handleClicks = (e) => {
  if (e.target.classList.contains("project-element")) {
    selectProjectIdOnClick(e);
  } else if (e.target.classList.contains("project-remove")) {
    removeProjectOnClick(e);
  }
};

const addProjectListeners = () => {
  const projects = document.querySelector(".project-list");
  projects.addEventListener("click", handleClicks);
};

export { addTodo, addProject, addDefaultProject };
