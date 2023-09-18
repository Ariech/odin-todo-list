const printTasksFromProject = (project) => {
  project.tasks.forEach((ele) => console.log(ele.getInfo()));
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  return element;
};

const getElement = (selector) => {
  return document.querySelector(selector);
};

const createHeader = () => {
  const header = createElement("header", "header");
  return header;
};

const createMain = () => {
  const main = createElement("main", "main");
  return main;
};

const createFooter = () => {
  const footer = createElement("footer", "footer");
  return footer;
};

const getInitPage = () => {
  const body = getElement("body");

  const container = createElement("div", "container");
  body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
};

export { printTasksFromProject, getInitPage };
