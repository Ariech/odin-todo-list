import createTask from "../modules/taskFactory";
import createProject from "../modules/projectFactory";
import {
  addTaskToProjectTasks,
  addProjectToProjectList,
} from "../models/model";
import {
  getElement,
  printTasksFromProject,
  printProjectsFromProjectList,
  createProjectElement,
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

    addTaskToProjectTasks(project, task);
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

    printProjectsFromProjectList();
    form.reset();
  });
};

export { addTodo, addProject };
