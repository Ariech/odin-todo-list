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

export {
  projectList,
  addTaskToProjectTasks,
  removeTaskFromProjectTasks,
  addProjectToProjectList,
  removeProjectFromProjectList,
};
