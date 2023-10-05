import { printProjectsFromProjectList } from "../views/view";
const projectList = [];
let currentProject = "";

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

const getTaskById = (project, taskId) => {
  return project.tasks.find((task) => task.getId() === taskId);
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
};
