const createTask = (title, description, dueDate, priority) => {
  const getTitle = () => title;

  const getDescription = () => description;

  const getDueDate = () => dueDate;

  const getPriority = () => priority;

  const setTitle = (value) => {
    title = value;
  };
  const setDescription = (value) => {
    description = value;
  };
  const setDueDate = (value) => {
    dueDate = value;
  };
  const setPriority = (value) => {
    priority = value;
  };

  const getObject = () => {
    console.log(
      `Title: ${title}, description: ${description}, dueDate: ${dueDate}, priority: ${priority}`
    );
  };

  return {
    getObject,
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
