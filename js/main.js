import { fetchToDo, postToDo } from "./api";
import { renderToDo } from "./renderToDo";

const toDoInputEl = document.querySelector(".create-todo__input");
const createToDoBtn = document.querySelector(".create-todo__button");

let inputValue = "";

window.onload = async () => {
  const data = await fetchToDo();
  renderToDo(data);
};

toDoInputEl.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

toDoInputEl.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && !e.isComposing) {
    await handleCreateToDo(inputValue);
  }
});

createToDoBtn.addEventListener("click", async () => {
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
  createToDoSpanEl.classList.add("active");
});

toDoInputEl.addEventListener("blur", () => {
  createToDoSpanEl.classList.remove("active");
});
