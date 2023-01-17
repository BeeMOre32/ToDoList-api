import axios from "axios";

const CONTENT_TYPE = "application/json";
const API_KEY = "FcKdtJs202301";
const USERNAME = "KDT4_ChoeHawnSeok";
const API_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos";

const API_HEADERS = {
  "Content-Type": CONTENT_TYPE,
  apikey: API_KEY,
  username: USERNAME,
};

export function fetchToDo() {
  return axios.get(API_URL, { headers: API_HEADERS }).then((res) => res.data);
}

export function postToDo(toDo) {
  return axios
    .post(API_URL, { title: toDo }, { headers: API_HEADERS })
    .then((res) => res.data);
}

export function deleteToDo(todoId) {
  return axios.delete(API_URL + "/" + todoId, { headers: API_HEADERS });
}

export function updateToDo(todoId, todo) {
  return axios
    .put(
      API_URL + "/" + todoId,
      { title: todo, done: false },
      { headers: API_HEADERS }
    )
    .then((res) => res.data);
}
