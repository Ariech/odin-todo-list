const createProject = (title) => {
  const tasks = [];
  const getId = () => new Date().getTime().toString();

  const getTitle = () => title;

  const getInfo = () => {
    return `Id: ${getId()}, title: ${title}`;
  };

  return {
    tasks,
    getId,
    getTitle,
    getInfo,
  };
};

export default createProject;
