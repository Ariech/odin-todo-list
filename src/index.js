import "./styles.css";
import createTask from "./modules/taskFactory";
import createProject from "./modules/projectFactory";
import {
  addTaskToProjectTasks,
  removeTaskFromProjectTasks,
  printTasksFromProject,
} from "./models/model";

const task = createTask(0, "first", "something", "22.2.2023", "red");
const task2 = createTask(1, "second", "xxx", "15.4.2028", "yellow");

const project = createProject("First");
const project2 = createProject("Second");

addTaskToProjectTasks(project, task);
addTaskToProjectTasks(project, task2);

printTasksFromProject(project);

const task3 = createTask(0, "third", "dishes", "12.12.2021", "green");

addTaskToProjectTasks(project2, task3);

printTasksFromProject(project2);
