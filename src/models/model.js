import createProject from "../modules/projectFactory";
import { createProjectElement } from "../views/view";

const projectList = [];

const addTaskToProjectTasks = (project, task) => {
  project.tasks.push(task);
};

const removeTaskFromProjectTasks = (project, task) => {
  project.tasks.splice(task.getId(), 1);
};

const addProjectToProjectList = (project) => {
  projectList.push(project);
};

const removeProjectFromProjectList = (project) => {
  projectList.splice(project.getId(), 1);
};

const getCurrentProject = (project) => {
  // Temporary solution
  const [lastProject] = projectList.slice(-1);
  return lastProject;
};

const addDefaultProject = () => {
  // Temp solution
  const projectList = document.querySelector(".project-list");
  const temp = createProject("Temporary");
  addProjectToProjectList(temp);
  createProjectElement(temp);
};

export {
  projectList,
  addTaskToProjectTasks,
  removeTaskFromProjectTasks,
  addProjectToProjectList,
  removeProjectFromProjectList,
  getCurrentProject,
  addDefaultProject,
};
