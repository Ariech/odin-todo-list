const createTask = (id, title, description, dueDate, priority) => {
  const getId = () => id;

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
    return `Id: ${id}, title: ${title}, description: ${description}, dueDate: ${dueDate}, priority: ${priority}`;
  };

  return {
    getId,
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
