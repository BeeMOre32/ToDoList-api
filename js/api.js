export async function getToDo() {
  const res = await fetch("/api/fetch").then((res) => res.json());
  return res.data;
}

export async function postToDo(toDo) {
  const res = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ title: toDo }),
  });
  return res.json();
}

export function deleteToDo(todoId) {
  fetch("/api/delete?id=" + todoId, {
    method: "DELETE",
  }).then((r) => r.json());
}

export function updateToDo(todoId, todo) {
  return fetch("/api/update?id=" + todoId, {
    method: "PUT",
    body: JSON.stringify({ title: todo, done: false, order: 0 }),
  }).then((r) => r.json());
}

export async function updateListOrder(todoIds) {
  return await fetch("/api/reorder", {
    method: "PUT",
    body: JSON.stringify({ todoIds: todoIds }),
  }).then((r) => r.json());
}

export async function updateDone(todoId, todo, done) {
  return await fetch("/api/updatedone?id=" + todoId, {
    method: "PUT",
    body: JSON.stringify({ title: todo, done: done }),
  }).then((r) => r.json());
}
