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

  const h1 = createElement("h1", "title");
  h1.textContent = "To-Do List";

  header.appendChild(h1);
  return header;
};

const createMain = () => {
  const main = createElement("main", "main");

  const h1 = createElement("h1");
  h1.textContent = "Todos";

  const form = createElement("form");

  const input = createElement("input");
  input.type = "text";
  input.placeholder = "Add task";
  input.name = "task";

  const submitButton = createElement("button", "submit-button");
  submitButton.textContent = "Add task";

  const taskList = createElement("ul", "task-list");

  form.append(input, submitButton);

  main.append(h1, form, taskList);
  return main;
};

const createFooter = () => {
  const footer = createElement("footer", "footer");

  const p = createElement("p", "author");
  p.textContent = "Coded by Ariech";

  const githubLink = createElement("a", "github-link");
  githubLink.href = "https://github.com/Ariech";
  githubLink.setAttribute("target", "_blank");

  const githubIcon = createElement("i", "github-icon");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.append(p, githubLink);
  return footer;
};

const temporaryDisableSubmitButton = () => {
  const submitButton = getElement(".submit-button");

  submitButton.addEventListener("click", (e) => e.preventDefault());
};

const getInitPage = () => {
  const body = getElement("body");

  const container = createElement("div", "container");
  body.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
  temporaryDisableSubmitButton();
};

export { printTasksFromProject, getInitPage };
