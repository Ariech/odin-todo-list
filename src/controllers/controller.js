import createTask from "../modules/taskFactory";
import createProject from "../modules/projectFactory";
import {
  addTaskToProjectTasks,
  addProjectToProjectList,
  getCurrentProject,
  setCurrentProject,
  removeProjectFromProjectList,
  removeTaskFromProjectTasks,
  projectList,
  getCurrentProjectId,
} from "../models/model";
import {
  getElement,
  createProjectElement,
  renderTasksFromCurrentProject,
  renderProjectsFromProjectList,
  createDefaultProjectElement,
  printProjectsFromProjectList,
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

    form.reset();
  });
};

const addDefaultProject = () => {
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
  renderTasksFromCurrentProject();
};

const removeTaskOnClick = (e) => {
  const projectId = getCurrentProjectId();
  const taskId = e.target.dataset.taskId;

  removeTaskFromProjectTasks(projectId, taskId);
  renderTasksFromCurrentProject();
};

const showModal = (e) => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hidden");

  selectProjectIdOnClick(e);
};

const closeModal = (e) => {
  const overlay = document.querySelector(".overlay");

  if (
    e.target === overlay ||
    e.target.classList.contains("modal-edit-cbutton")
  ) {
    overlay.classList.toggle("hidden");
  }
};

const editProjectTitle = (e) => {
  const overlay = document.querySelector(".overlay");
  const editInput = document.querySelector(".modal-edit-input");

  getCurrentProject().setTitle(editInput.value);
  renderProjectsFromProjectList();

  if (editInput.value !== "") {
    overlay.classList.toggle("hidden");
    editInput.value = "";
  }
};

const handleClicks = (e) => {
  if (e.target.classList.contains("project-element")) {
    selectProjectIdOnClick(e);
  } else if (e.target.classList.contains("project-remove")) {
    removeProjectOnClick(e);
  } else if (e.target.classList.contains("project-edit")) {
    showModal(e);
  } else if (e.target.classList.contains("task-remove")) {
    removeTaskOnClick(e);
  } else if (e.currentTarget.classList.contains("overlay")) {
    closeModal(e);
  } else if (e.target.classList.contains("modal-edit-ebutton")) {
    editProjectTitle(e);
  }
};

const addTaskListeners = () => {
  const taskList = document.querySelector(".task-list");
  taskList.addEventListener("click", handleClicks);
};

const addProjectListeners = () => {
  const projects = document.querySelector(".project-list");
  projects.addEventListener("click", handleClicks);
};

const addOverlayListeners = () => {
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", handleClicks);
};

const addEditProjectModalListeners = () => {
  const editModal = document.querySelector(".modal-edit");
  editModal.addEventListener("click", handleClicks);
};

const addListeners = () => {
  addTodo();
  addProject();
  addProjectListeners();
  addTaskListeners();
  addOverlayListeners();
  addEditProjectModalListeners();
};

export { addDefaultProject, addListeners };
