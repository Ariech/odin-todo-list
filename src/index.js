import createTask from "./task";

const task = createTask("first", "something", "22.2.2023", "red");

task.getObject();

task.setTitle("third");
task.getObject();
