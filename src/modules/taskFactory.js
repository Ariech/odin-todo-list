const createTask = (title, description, dueDate, priority, project) => {
  const id = new Date().getTime().toString();
  const getId = () => id;

  const getProjectId = () => project.getId();

  const getTitle = () => title;

  const getDescription = () => description;

  const getDueDate = () => dueDate;

  const getPriority = () => priority;

  const setTitle = (value) => {
    if (value) {
      title = value;
    }
  };

  const setDescription = (value) => {
    if (value) {
      description = value;
    }
  };

  const setDueDate = (value) => {
    if (value) {
      dueDate = value;
    }
  };

  const setPriority = (value) => {
    if (value) {
      priority = value;
    }
  };

  const getInfo = () => {
    return `Id: ${getId()}, title: ${title}, description: ${description}, dueDate: ${dueDate}, priority: ${priority}`;
  };

  return {
    getId,
    getProjectId,
    getInfo,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

export default createTask;
