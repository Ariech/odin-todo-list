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

export {
  projectList,
  addTaskToProjectTasks,
  removeTaskFromProjectTasks,
  addProjectToProjectList,
  removeProjectFromProjectList,
  getCurrentProject,
};
