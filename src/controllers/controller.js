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
  getTaskById,
  setCurrentTaskId,
  getCurrentTaskId,
  updateLocalStorage,
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

    updateLocalStorage();

    form.reset();
  });
};

// Implementing localStorage

const initLocalStorage = () => {
  const projectListData = JSON.parse(localStorage.getItem("projectList"));

  if (Array.isArray(projectListData)) {
    projectListData.forEach((projectData) => {
      const project = createProject(projectData.title);
      project.setId(projectData.id);
      project.tasks = projectData.tasks;
      addProjectToProjectList(project);
      createProjectElement(project);
    });
  }
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

const selectTaskIdOnClick = (e) => {
  const taskId = e.target.dataset.taskId;
  setCurrentTaskId(taskId);
};

const removeProjectOnClick = (e) => {
  const projectId = e.target.dataset.projectId;
  removeProjectFromProjectList(projectId);
  setCurrentProject(projectList[0].getId());
  renderProjectsFromProjectList();
  renderTasksFromCurrentProject();
  updateLocalStorage();
};

const removeTaskOnClick = (e) => {
  const projectId = getCurrentProjectId();
  const taskId = e.target.dataset.taskId;

  removeTaskFromProjectTasks(projectId, taskId);
  renderTasksFromCurrentProject();
};

const changeOverlayState = () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hidden");
};

const showProjectModal = (e) => {
  const projectModal = document.querySelector(".modal-edit-project");

  changeOverlayState();
  projectModal.style.display = "block";

  selectProjectIdOnClick(e);
};

const showTaskModal = (e) => {
  const taskModal = document.querySelector(".modal-edit-task");

  changeOverlayState();
  taskModal.style.display = "block";
  selectTaskIdOnClick(e);
};

const closeModals = (e) => {
  const projectModal = document.querySelector(".modal-edit-project");
  const taskModal = document.querySelector(".modal-edit-task");
  const overlay = document.querySelector(".overlay");

  if (
    e.target === overlay ||
    e.target.classList.contains("modal-edit-cbutton")
  ) {
    changeOverlayState();
    projectModal.style.display = "none";
    taskModal.style.display = "none";
  }
};

const clearTaskEditInputs = () => {
  const overlay = document.querySelector(".overlay");
  const taskModal = document.querySelector(".modal-edit-task");
  const editTitleInput = getElement(".modal-title-input-task");
  const editDescInput = getElement(".modal-desc-input-task");
  const editDateInput = getElement('[name="date-edit"]');

  editTitleInput.value = "";
  editDescInput.value = "";
  editDateInput.value = "";
  taskModal.style.display = "none";
  overlay.classList.add("hidden");
};

const editProjectTitle = (e) => {
  const projectModal = document.querySelector(".modal-edit-project");
  const editInput = document.querySelector(".modal-edit-input");

  getCurrentProject().setTitle(editInput.value);
  renderProjectsFromProjectList();

  if (editInput.value !== "") {
    changeOverlayState();
    editInput.value = "";
    projectModal.style.display = "none";
  }

  updateLocalStorage();
};

const editTaskDetails = (e) => {
  const editTitleInput = getElement(".modal-title-input-task");
  const editDescInput = getElement(".modal-desc-input-task");
  const editDateInput = getElement('[name="date-edit"]');
  const editColorInput = getElement('[name="colors-edit"]');

  const taskId = getCurrentTaskId();

  const task = getTaskById(getCurrentProject(), taskId);

  task.setTitle(editTitleInput.value);
  task.setDescription(editDescInput.value);
  task.setDueDate(editDateInput.value);
  task.setPriority(editColorInput.value);

  renderTasksFromCurrentProject();

  clearTaskEditInputs();
};

const handleClicks = (e) => {
  if (e.target.classList.contains("project-element")) {
    selectProjectIdOnClick(e);
  } else if (e.target.classList.contains("project-remove")) {
    removeProjectOnClick(e);
  } else if (e.target.classList.contains("project-edit")) {
    showProjectModal(e);
  } else if (e.target.classList.contains("task-remove")) {
    removeTaskOnClick(e);
  } else if (e.target.classList.contains("task-edit")) {
    showTaskModal(e);
  } else if (e.target.classList.contains("modal-edit-ebutton")) {
    editProjectTitle(e);
  } else if (e.target.classList.contains("modal-edit-ebutton-task")) {
    editTaskDetails(e);
  } else if (e.currentTarget.classList.contains("overlay")) {
    closeModals(e);
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
  const editModal = document.querySelector(".modal-edit-project");
  editModal.addEventListener("click", handleClicks);
};

const addEditTaskModalListeners = () => {
  const editModal = document.querySelector(".modal-edit-ebutton-task");
  editModal.addEventListener("click", handleClicks);
};

const addListeners = () => {
  addTodo();
  addProject();
  addProjectListeners();
  addTaskListeners();
  addOverlayListeners();
  addEditProjectModalListeners();
  addEditTaskModalListeners();
};

export { addDefaultProject, addListeners, initLocalStorage };
