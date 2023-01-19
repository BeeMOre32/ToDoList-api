import dayjs from "dayjs";

const clock = document.querySelector(".clock");

export function setClock() {
  const now = dayjs();
  clock.innerText = now.format("HH:mm:ss");
}
