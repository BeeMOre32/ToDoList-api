import dayjs from "dayjs";

const clock = document.querySelector(".clock");

function setClock() {
  const now = dayjs();
  clock.innerText = now.format("HH:mm:ss");
}

const clockInterval = setInterval(setClock, 1000);

export { clockInterval };
