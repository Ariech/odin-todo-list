import { addDefaultProject, addListeners } from "../controllers/controller";
import {
  projectList,
  getCurrentProject,
  initLocalStorage,
} from "../models/model";

const printTasksFromProject = (project) => {
  project.tasks.forEach((ele) => console.log(ele.getInfo()));
};

const printProjectsFromProjectList = () => {
  for (const project of projectList) {
    console.log(project.getInfo());
  }
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  return element;
};

const getElement = (selector) => {
  return document.querySelector(selector);
};

const createTaskForm = () => {
  const form = createElement("form");
  form.className = "task-form";

  const title = createElement("input");
  title.type = "text";
  title.placeholder = "Add task";
  title.name = "task";

  const description = createElement("textarea", "task-desc-ta");
  description.placeholder = "Description";

  const date = createElement("input");
  date.type = "date";
  date.name = "date";

  const colors = createElement("select");
  colors.name = "colors";

  const high = createElement("option");
  high.value = "high";
  high.textContent = "high";
  const medium = createElement("option");
  medium.value = "medium";
  medium.textContent = "medium";
  const low = createElement("option");
  low.value = "low";
  low.textContent = "low";

  colors.append(high, medium, low);

  const submitButton = createElement("button", "submit-button");
  submitButton.textContent = "Add task";

  form.append(title, description, date, colors, submitButton);

  return form;
};

const createProjectForm = () => {
  const form = createElement("form");
  form.className = "project-form";

  const title = createElement("input");
  title.type = "text";
  title.placeholder = "Project name";
  title.name = "project-title";

  const submitButton = createElement("button", "submit-button");
  submitButton.textContent = "Submit";

  form.append(title, submitButton);

  return form;
};

const createTaskList = () => {
  const taskList = createElement("div", "task-list");
  return taskList;
};

const createProjectList = () => {
  const projectList = createElement("div", "project-list");
  return projectList;
};

const createProjectElement = (project) => {
  const projectList = getElement(".project-list");

  const projectElement = createElement("div");
  projectElement.classList.add("project-element");
  projectElement.dataset.projectId = project.getId();

  const projectTitle = createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.classList.add("project-element");
  projectTitle.textContent = project.getTitle();
  projectTitle.dataset.projectId = project.getId();

  projectElement.append(projectTitle);

  if (project.getTitle() !== "Default") {
    const buttonContainer = createElement("div", "project-button-container");
    const projectEdit = createElement("i");
    projectEdit.classList.add("fa-regular");
    projectEdit.classList.add("fa-pen-to-square");
    projectEdit.classList.add("project-edit");
    projectEdit.dataset.projectId = project.getId();

    const projectRemove = createElement("i");
    projectRemove.classList.add("fa-regular");
    projectRemove.classList.add("fa-trash-can");
    projectRemove.classList.add("project-remove");
    projectRemove.dataset.projectId = project.getId();

    buttonContainer.append(projectEdit, projectRemove);
    projectElement.append(buttonContainer);
  }

  projectList.append(projectElement);
};

const createDefaultProjectElement = (project) => {
  const projectList = getElement(".project-list");

  const projectElement = createElement("div");
  projectElement.classList.add("project-element");
  projectElement.dataset.projectId = project.getId();

  const projectTitle = createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.classList.add("project-element");
  projectTitle.textContent = project.getTitle();
  projectTitle.dataset.projectId = project.getId();

  projectElement.append(projectTitle);
  projectList.append(projectElement);
};

const editProjectModal = () => {
  const projectModal = createElement("div", "modal-edit-project");

  const titleContainer = createElement("div", "modal-edit-title-container");

  const h1 = createElement("h1", "modal-edit-title");
  h1.textContent = "Edit project";

  const contentContainer = createElement("div", "modal-edit-content-container");

  const label = createElement("label", "modal-edit-label");
  label.setAttribute("for", "modal-title");
  label.textContent = "Title";

  const input = createElement("input", "modal-edit-input");
  input.setAttribute("name", "modal-title");
  input.setAttribute("id", "modal-title");
  input.setAttribute("placeholder", "Project name");

  const buttonContainer = createElement("div", "modal-edit-button-container");

  const cancelButton = createElement("button", "modal-edit-cbutton");
  cancelButton.textContent = "Cancel";

  const editButton = createElement("button", "modal-edit-ebutton");
  editButton.textContent = "Edit";

  titleContainer.append(h1);
  contentContainer.append(label, input);
  buttonContainer.append(cancelButton, editButton);
  projectModal.append(titleContainer, contentContainer, buttonContainer);

  return projectModal;
};

const editTaskModal = () => {
  const taskModal = createElement("div", "modal-edit-task");

  const titleContainer = createElement(
    "div",
    "modal-edit-title-container-task"
  );

  const h1 = createElement("h1", "modal-edit-title");
  h1.textContent = "Edit task";

  const contentContainer = createElement(
    "div",
    "modal-edit-content-container-task"
  );

  const labelTitle = createElement("label", "modal-edit-label");
  labelTitle.setAttribute("for", "modal-title-task");
  labelTitle.textContent = "Title";

  const inputTitle = createElement("input", "modal-title-input-task");
  inputTitle.setAttribute("name", "modal-title-task");
  inputTitle.setAttribute("id", "modal-title-task");

  const labelDescription = createElement("label", "modal-edit-label");
  labelDescription.setAttribute("for", "modal-description-task");
  labelDescription.textContent = "Description";

  const inputDescription = createElement("textarea", "modal-desc-input-task");
  inputDescription.setAttribute("name", "modal-description-task");
  inputDescription.setAttribute("id", "modal-description-task");
  inputDescription.rows = "3";
  inputDescription.cols = "7";

  const date = createElement("input");
  date.type = "date";
  date.name = "date-edit";

  const colors = createElement("select");
  colors.name = "colors-edit";

  const high = createElement("option");
  high.value = "high";
  high.textContent = "high";
  const medium = createElement("option");
  medium.value = "medium";
  medium.textContent = "medium";
  const low = createElement("option");
  low.value = "low";
  low.textContent = "low";

  colors.append(high, medium, low);

  const buttonContainer = createElement("div", "modal-edit-button-container");

  const cancelButton = createElement("button", "modal-edit-cbutton");
  cancelButton.textContent = "Cancel";

  const editButton = createElement("button", "modal-edit-ebutton-task");
  editButton.textContent = "Edit";

  titleContainer.append(h1);
  contentContainer.append(
    labelTitle,
    inputTitle,
    labelDescription,
    inputDescription,
    date,
    colors
  );
  buttonContainer.append(cancelButton, editButton);
  taskModal.append(titleContainer, contentContainer, buttonContainer);

  return taskModal;
};

const createTaskElement = (task) => {
  const taskList = getElement(".task-list");

  const taskElement = createElement("div");
  taskElement.classList.add("task-element");
  taskElement.dataset.taskId = task.getId();

  const taskTitle = createElement("p");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.getTitle();
  taskTitle.dataset.taskId = task.getId();

  const taskDesc = createElement("p");
  taskDesc.classList.add("task-desc");
  taskDesc.textContent = task.getDescription();
  taskDesc.dataset.taskId = task.getId();

  const taskDate = createElement("p");
  taskDate.classList.add("task-date");
  taskDate.textContent = task.getDueDate();
  taskDate.dataset.taskId = task.getId();

  const taskPriority = createElement("p");
  taskPriority.classList.add("task-priority");
  taskPriority.textContent = task.getPriority();
  taskPriority.dataset.taskId = task.getId();

  const currentProjectId = task.getProjectId();
  taskElement.dataset.projectId = currentProjectId;

  const buttonContainer = createElement("div", "task-button-container");

  const taskEdit = createElement("i");
  taskEdit.classList.add("task-edit");
  taskEdit.classList.add("fa-regular");
  taskEdit.classList.add("fa-pen-to-square");
  taskEdit.dataset.taskId = task.getId();

  const taskRemove = createElement("i");
  taskRemove.classList.add("task-remove");
  taskRemove.classList.add("fa-regular");
  taskRemove.classList.add("fa-trash-can");

  taskRemove.dataset.taskId = task.getId();

  buttonContainer.append(taskEdit, taskRemove);

  taskElement.append(
    taskTitle,
    taskDesc,
    taskDate,
    taskPriority,
    buttonContainer
  );
  taskList.append(taskElement);
};

const renderTasksFromCurrentProject = () => {
  const currentProject = getCurrentProject();
  let taskListHtml = getElement(".task-list");
  taskListHtml.innerHTML = "";

  currentProject.tasks.forEach((task) => {
    createTaskElement(task);
  });
};

const renderProjectsFromProjectList = () => {
  const projectListDOM = getElement(".project-list");
  projectListDOM.innerHTML = "";

  projectList.forEach((project) => {
    if (project.getTitle() === "Default") {
      createDefaultProjectElement(project);
    } else {
      createProjectElement(project);
    }
  });
};

const createHeader = () => {
  const header = createElement("header", "header");

  const h1 = createElement("h1", "title");
  h1.textContent = "To-Do List";

  header.appendChild(h1);
  return header;
};

const createMain = () => {
  const main = createElement("main", "main");
  const projectContainer = createElement("div", "project-container");
  const taskContainer = createElement("div", "task-container");

  projectContainer.append(createProjectForm(), createProjectList());
  taskContainer.append(createTaskForm(), createTaskList());
  main.append(projectContainer, taskContainer);
  return main;
};

const createFooter = () => {
  const footer = createElement("footer", "footer");

  const p = createElement("p", "author");
  p.textContent = "Coded by Ariech";

  const githubLink = createElement("a", "github-link");
  githubLink.href = "https://github.com/Ariech";
  githubLink.setAttribute("target", "_blank");

  const githubIcon = createElement("i", "github-icon");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.append(p, githubLink);
  return footer;
};

const createModalOverlay = () => {
  const overlay = createElement("div", "overlay");
  overlay.classList.add("hidden");

  overlay.append(editProjectModal());
  overlay.append(editTaskModal());

  return overlay;
};

const getInitPage = () => {
  const body = getElement("body");

  const container = createElement("div", "container");
  body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
  container.appendChild(createModalOverlay());

  addListeners();
  addDefaultProject();
  editProjectModal();
  initLocalStorage();
};

export {
  printTasksFromProject,
  printProjectsFromProjectList,
  getInitPage,
  getElement,
  createElement,
  createProjectElement,
  createDefaultProjectElement,
  createTaskElement,
  renderTasksFromCurrentProject,
  renderProjectsFromProjectList,
};
