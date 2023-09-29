import createTask from "../modules/taskFactory";
import createProject from "../modules/projectFactory";
import {
  addTaskToProjectTasks,
  addProjectToProjectList,
  getCurrentProject,
  setCurrentProject,
} from "../models/model";
import {
  getElement,
  printTasksFromProject,
  printProjectsFromProjectList,
  createProjectElement,
  createTaskElement,
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
    createTaskElement(task);

    printTasksFromProject(project);

    form.reset();
  });
};

const addProject = () => {
  const form = getElement(".project-form");
  const titleInput = getElement('[name="project-title"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const project = createProject(titleInput.value);
    addProjectToProjectList(project);
    createProjectElement(project);

    addProjectListener();

    form.reset();
  });
};

const addProjectListener = () => {
  const projects = document.querySelectorAll(".project-element");

  projects.forEach((project) => {
    project.addEventListener("click", selectProjectIdOnClick);
  });
};

const selectProjectIdOnClick = (e) => {
  const projectId = e.currentTarget.dataset.projectId;
  setCurrentProject(projectId);
};

export { addTodo, addProject, addProjectListener };
