import { printProjectsFromProjectList } from "../views/view";
const projectList = [];
let currentProject = "";
let currentTaskId = "";

const addTaskToProjectTasks = (project, task) => {
  project.tasks.push(task);
};

const removeTaskFromProjectTasks = (projectId, taskId) => {
  const project = getProjectById(projectId);
  const task = getTaskById(project, taskId);

  project.tasks.splice(task, 1);

  project.tasks.forEach((task) => {
    console.log(task.getInfo());
  });
};

const addProjectToProjectList = (project) => {
  projectList.push(project);
};

const removeProjectFromProjectList = (projectId) => {
  const projectToRemove = getProjectById(projectId);

  const projectIndex = projectList.indexOf(projectToRemove);
  projectList.splice(projectIndex, 1);

  printProjectsFromProjectList();
};

const setCurrentProject = (id) => {
  currentProject = getProjectById(id);
  return currentProject;
};

const getCurrentProject = () => {
  return currentProject;
};

const getCurrentProjectId = () => {
  return currentProject.getId();
};

const getProjectById = (projectId) => {
  return projectList.find((project) => project.getId() === projectId);
};

const setCurrentTaskId = (taskId) => {
  currentTaskId = taskId;
};

const getCurrentTaskId = () => {
  return currentTaskId;
};

const getTaskById = (project, taskId) => {
  return project.tasks.find((task) => task.getId() === taskId);
};

const updateLocalStorage = () => {
  const projectListData = projectList.map((project) => ({
    id: project.getId(),
    tasks: project.tasks,
    title: project.getTitle(),
  }));

  localStorage.setItem("projectList", JSON.stringify(projectListData.slice(1)));
};

export {
  projectList,
  addTaskToProjectTasks,
  removeTaskFromProjectTasks,
  addProjectToProjectList,
  removeProjectFromProjectList,
  setCurrentProject,
  getCurrentProject,
  getCurrentProjectId,
  getTaskById,
  setCurrentTaskId,
  getCurrentTaskId,
  updateLocalStorage,
};
