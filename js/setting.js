export function handelSettingOpen(settingModalEl) {
  settingModalEl.classList.add("active");
}

export function handelSettingClose(settingModalEl) {
  settingModalEl.classList.remove("active");
}

export function toggleClock() {
  const toggleClockEl = document.querySelector("#clockMode");
  const clockEl = document.querySelector(".clock");

  if (toggleClockEl.checked) {
    clockEl.classList.add("invisible");
  } else {
    clockEl.classList.remove("invisible");
  }
}

export function toggleTheme() {
  const toggleThemeEl = document.querySelector("#darkMode");
  const bodyEl = document.querySelector("body");

  if (toggleThemeEl.checked) {
    bodyEl.classList.add("dark");
  } else {
    bodyEl.classList.remove("dark");
  }
}
