import createTask from "../modules/taskFactory";
import createProject from "../modules/projectFactory";
import { addTaskToProjectTasks } from "../models/model";
import { getElement, printTasksFromProject } from "../views/view";

const addTodo = () => {
  const form = getElement("form");
  const textInput = getElement('[name="task"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = createTask("first", textInput.value, "22.2.2023", "red");
    const project = createProject("First");
    addTaskToProjectTasks(project, task);
    addTaskToProjectTasks(project, task2);
    printTasksFromProject(project);

    form.reset();
  });
};

export { addTodo };
