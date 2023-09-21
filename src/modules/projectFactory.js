const createProject = (title) => {
  const tasks = [];

  const getTitle = () => title;

  return {
    tasks,
    getTitle,
  };
};

export default createProject;
