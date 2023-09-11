const createProject = (title) => {
  const tasks = [];

  const getTitle = () => title;

  const setTitle = (value) => {
    title = value;
  };

  return {
    tasks,
    getTitle,
    setTitle,
  };
};

export default createProject;
