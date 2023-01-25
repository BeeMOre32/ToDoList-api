import axios from "../node_modules/axios";
import validationString from "./validation";

const CONTENT_TYPE = process.env.CONTENT_TYPE;
const API_KEY = process.env.API_KEY;
const USERNAME = process.env.USERNAMES;
const API_URL = process.env.API_URL;

const API_HEADERS = {
  "Content-Type": CONTENT_TYPE,
  apikey: API_KEY,
  username: USERNAME,
};

export function fetchToDo() {
  return axios.get(API_URL, { headers: API_HEADERS }).then((res) => res.data);
}

export function postToDo(toDo) {
  if (!validationString(toDo)) {
    return;
  }
  return axios
    .post(API_URL, { title: toDo }, { headers: API_HEADERS })
    .then((res) => res.data);
}

export function deleteToDo(todoId) {
  return axios.delete(API_URL + "/" + todoId, { headers: API_HEADERS });
}

export function updateToDo(todoId, todo) {
  if (!validationString(todo)) {
    return;
  }
  return axios
    .put(
      API_URL + "/" + todoId,
      { title: todo, done: false, order: 0 },
      { headers: API_HEADERS }
    )
    .then((res) => res.data);
}

export function updateListOrder(todoIds) {
  return axios
    .put(API_URL + "/reorder", { todoIds: todoIds }, { headers: API_HEADERS })
    .then((res) => res.data);
}

export function updateDone(toDoId, Title, Done) {
  return axios
    .put(
      API_URL + "/" + toDoId,
      { title: Title, done: Done },
      { headers: API_HEADERS }
    )
    .then((res) => res.data);
}
