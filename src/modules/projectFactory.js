const createProject = (title, tasks) => {
  const getTitle = () => title;

  const setTitle = (value) => {
    title = value;
  };

  const addTaskToProject = (task) => {
    tasks.push(task);
  };

  const removeTaskFromProject = (task) => {
    tasks.splice(task.getId(), 1);
  };

  const printTasksFromProject = () => {
    tasks.forEach((ele) => console.log(ele.getObject()));
  };

  return {
    getTitle,
    setTitle,
    addTaskToProject,
    removeTaskFromProject,
    printTasksFromProject,
  };
};

export default createProject;
