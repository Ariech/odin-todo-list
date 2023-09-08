import createTask from "./modules/taskFactory";
import "./styles.css";
import createProject from "./modules/projectFactory";

const task = createTask(0, "first", "something", "22.2.2023", "red");
const task2 = createTask(1, "second", "xxx", "15.4.2028", "yellow");

// task.getObject();

// task.setTitle("third");
// task.getObject();

const tasks = [];

tasks.push(task);
tasks.push(task2);

let project = createProject("First", tasks);

// // console.log(tasks);
project.printTasksFromProject();

project.removeTaskFromProject(task2);

const id = task2.getId();
console.log("Id:" + id);

project.printTasksFromProject();
