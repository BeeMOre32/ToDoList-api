import sortable from "sortablejs";
import { updateDone, updateListOrder } from "./api";

const toDoListEl = document.querySelector(".todo-list__list");
const doneListEl = document.querySelector(".done-list__list");

const toDoList = sortable.create(toDoListEl, {
  group: "todoList",
  animation: 150,
  onEnd: async (e) => {
    if (e.target === e.to) {
      await handleListReorder(".todo-list__list");
    } else {
      await handleChangeToOtherList(e.item);
      await handleListReorder(".done-list__list");
    }
  },
});

const doneList = sortable.create(doneListEl, {
  group: "todoList",
  animation: 150,
  onEnd: async (e) => {
    if (e.target === e.to) {
      await handleListReorder(".done-list__list");
    } else {
      await handleChangeToOtherList(e.item);
      await handleListReorder(".todo-list__list");
    }
  },
});

async function handleListReorder(currentListClassName) {
  const currentListIdArray = [];
  const currentListEl = document.querySelector(currentListClassName);
  const currentList = Array.from(currentListEl.children);

  currentList.forEach((item) => {
    currentListIdArray.push(item.id);
  });

  await updateListOrder(currentListIdArray);
}

async function handleChangeToOtherList(currentEl) {
  const currentId = currentEl.id;
  const todoTitle = currentEl.querySelector(".text").innerText;
  const done = currentEl.dataset.done !== "true";

  currentEl.dataset.done = String(done);

  await updateDone(currentId, todoTitle, done);
}
