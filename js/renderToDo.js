import { deleteToDo, updateToDo } from "./api";

const toDoListEl = document.querySelector(".todo-list");
const doneListEl = document.querySelector(".done-list");
export function renderToDo(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");
    div.id = item.id;

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

    div.innerHTML = `
    <span class="text">${item.title}</span>
    `;
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");
    buttonWrapper.append(editBtn, delBtn);
    div.append(buttonWrapper);

    if (item.done) {
      doneListEl.appendChild(div);
    } else {
      toDoListEl.appendChild(div);
    }
  });
}

async function handleDeleteToDo(deletedId) {
  const alertEl = document.querySelector(".alert");
  alertEl.classList.add("active");
  const yesBtn = document.querySelector(".alert__yes");
  const noBtn = document.querySelector(".alert__no");

  yesBtn.addEventListener("click", async () => {
    await deleteToDo(deletedId);
    const div = document.getElementById(deletedId);
    div.remove();
    alertEl.classList.remove("active");
  });
  noBtn.addEventListener("click", () => {
    alertEl.classList.remove("active");
  });
}

async function handleUpdateToDo(todoId, todoTitle) {
  await updateToDo(todoId, todoTitle);
  const div = document.getElementById(todoId);
  div.querySelector(".text").innerText = todoTitle;
}
