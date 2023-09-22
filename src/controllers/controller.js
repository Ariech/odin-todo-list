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
} from "../views/view";

const addTodo = () => {
  const form = getElement("form");
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

    const project = createProject("First");
    addProjectToProjectList(project);

    addTaskToProjectTasks(project, task);
    printTasksFromProject(project);
    form.reset();
  });
};

export { addTodo };
