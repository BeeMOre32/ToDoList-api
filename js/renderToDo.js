import { deleteToDo, updateToDo } from "./api";

const toDoListEl = document.querySelector(".todo-list__list");
const doneListEl = document.querySelector(".done-list__list");

export function renderToDo(data) {
  toDoListEl.innerHTML = "";
  doneListEl.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.id = item.id;
    li.dataset.done = item.done;

    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.addEventListener("click", async () => {
      const newTitle = prompt("수정할 내용을 입력하세요");
      await handleUpdateToDo(item.id, newTitle);
    });

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", async () => {
      await handleDeleteToDo(item.id);
    });

    li.innerHTML = `
    <span class="text">${item.title}</span>
    `;
    const buttonWrapper = document.createElement("li");
    buttonWrapper.classList.add("button-wrapper");
    buttonWrapper.append(editBtn, delBtn);
    li.append(buttonWrapper);

    if (item.done) {
      doneListEl.appendChild(li);
    } else {
      toDoListEl.appendChild(li);
    }
  });
}

async function handleDeleteToDo(deletedId) {
  const alertEl = document.querySelector(".alert");
  alertEl.classList.add("active");
  const yesBtn = document.querySelector(".alert__yes");
  const noBtn = document.querySelector(".alert__no");

  yesBtn.addEventListener("click", async () => {
    const li = document.getElementById(deletedId);
    li.remove();
    alertEl.classList.remove("active");
    await deleteToDo(deletedId);
  });
  noBtn.addEventListener("click", () => {
    alertEl.classList.remove("active");
  });
}

async function handleUpdateToDo(todoId, todoTitle) {
  const data = await updateToDo(todoId, todoTitle);
  if (!data) {
  } else {
    const li = document.getElementById(todoId);
    li.querySelector(".text").innerText = todoTitle;
  }
}
