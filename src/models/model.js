import createProject from "../modules/projectFactory";
import {
  createDefaultProjectElement,
  printProjectsFromProjectList,
} from "../views/view";
const projectList = [];
let currentProject = "";

const addTaskToProjectTasks = (project, task) => {
  project.tasks.push(task);
};

const removeTaskFromProjectTasks = (project, task) => {
  project.tasks.splice(task.getId(), 1);
};

const addProjectToProjectList = (project) => {
  projectList.push(project);
};

const removeProjectFromProjectList = (projectId) => {
  const projectToRemove = projectList.find(
    (project) => project.getId() === projectId
  );

  const projectIndex = projectList.indexOf(projectToRemove);
  projectList.splice(projectIndex, 1);

  printProjectsFromProjectList();
};

const setCurrentProject = (id) => {
  currentProject = projectList.find((project) => project.getId() === id);

  return currentProject;
};

const getCurrentProject = () => {
  return currentProject;
};

export {
  projectList,
  addTaskToProjectTasks,
  removeTaskFromProjectTasks,
  addProjectToProjectList,
  removeProjectFromProjectList,
  setCurrentProject,
  getCurrentProject,
};
