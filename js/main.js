import { fetchToDo, postToDo } from "./api";
import { renderToDo } from "./renderToDo";

const toDoInputEl = document.querySelector(".create-todo__input");
const createToDoBtn = document.querySelector(".create-todo__button");
const toDoListEl = document.querySelector(".todo-list__list");
const doneListEl = document.querySelector(".done-list__list");

let inputValue = "";

window.onload = async () => {
  handlingLoading();
  const data = await fetchToDo();
  renderToDo(data);
};

toDoInputEl.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

toDoInputEl.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && !e.isComposing) {
    toDoListEl.innerHTML = "";
    doneListEl.innerHTML = "";
    handlingLoading();
    await handleCreateToDo(inputValue);
  }
});

createToDoBtn.addEventListener("click", async () => {
  handlingLoading();
  await handleCreateToDo(inputValue);
});

async function handleCreateToDo(todoTitle) {
  toDoInputEl.value = "";
  await postToDo(todoTitle);
  const data = await fetchToDo();
  renderToDo(data);
}

// Handling the Animation

const createToDoSpanEl = document.querySelector(".create-todo__span");

toDoInputEl.addEventListener("focus", () => {
  toDoInputEl.classList.add("active");
  createToDoSpanEl.classList.add("active");
});

toDoInputEl.addEventListener("blur", () => {
  toDoInputEl.classList.remove("active");
  createToDoSpanEl.classList.remove("active");
});

export function handlingLoading() {
  const toDoListEl = document.querySelector(".todo-list__list");
  const doneListEl = document.querySelector(".done-list__list");
  const loadingEl = document.createElement("li");
  loadingEl.classList.add("loading");
  loadingEl.innerHTML = `<span></span>`;

  for (let i = 0; i < 2; i++) {
    toDoListEl.appendChild(loadingEl.cloneNode(true));
    doneListEl.appendChild(loadingEl.cloneNode(true));
  }
}
