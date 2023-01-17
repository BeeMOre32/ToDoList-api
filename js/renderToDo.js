import { deleteToDo, updateToDo } from "./api";

const toDoListEl = document.querySelector(".todo-list");
const doneListEl = document.querySelector(".done-list");
export function renderToDo(data) {
  data.forEach((item) => {
    const li = document.createElement("li");
    li.id = item.id;

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

    li.append(editBtn, delBtn);

    if (item.done) {
      doneListEl.appendChild(li);
    } else {
      toDoListEl.appendChild(li);
    }
  });
}

async function handleDeleteToDo(deletedId) {
  await deleteToDo(deletedId);
  const li = document.getElementById(deletedId);
  li.remove();
}

async function handleUpdateToDo(todoId, todoTitle) {
  await updateToDo(todoId, todoTitle);
  const li = document.getElementById(todoId);
  li.querySelector(".text").innerText = todoTitle;
}
