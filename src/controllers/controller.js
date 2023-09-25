import createTask from "../modules/taskFactory";
import createProject from "../modules/projectFactory";
import {
  addTaskToProjectTasks,
  addProjectToProjectList,
  getCurrentProject,
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

    const task = createTask(
      titleInput.value,
      descriptionInput.value,
      dateInput.value,
      colorInput.value
    );

    addTaskToProjectTasks(getCurrentProject(), task);
    createTaskElement(task);

    // printTasksFromProject(project);

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

    printProjectsFromProjectList();
    form.reset();
  });
};

export { addTodo, addProject };
