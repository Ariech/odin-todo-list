const createProject = (title) => {
  const tasks = [];
  const id = new Date().getTime().toString();
  const getId = () => id;

  const getTitle = () => title;

  const setTitle = (value) => {
    if (value) {
      title = value;
    }
  };

  const getInfo = () => {
    return `Id: ${getId()}, title: ${title}`;
  };

  return {
    tasks,
    getId,
    getTitle,
    getInfo,
    setTitle,
  };
};

export default createProject;

// export default class Project {
//   constructor(title) {
//     this.title = title;
//     this.id = new Date().getTime().toString();
//     this.tasks = [];
//   }

//   getId() {
//     return this.id;
//   }

//   getTitle() {
//     return this.title;
//   }

//   setTitle(value) {
//     this.title = value;
//   }
// }
