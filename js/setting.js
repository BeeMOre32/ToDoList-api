const settingObj = {
  _darkMode: false,
  _clockMode: true,

  get darkMode() {
    return this._darkMode;
  },

  set darkMode(value) {
    this._darkMode = value;
    setSettingLocalStorage(this);
  },

  set clockMode(value) {
    this._clockMode = value;
    setSettingLocalStorage(this);
  },
  get clockMode() {
    return this._clockMode;
  },
};

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
    settingObj.clockMode = false;
  } else {
    clockEl.classList.remove("invisible");
    settingObj.clockMode = true;
  }
}

export function toggleTheme() {
  const toggleThemeEl = document.querySelector("#darkMode");
  const bodyEl = document.querySelector("body");

  if (toggleThemeEl.checked) {
    bodyEl.classList.add("dark");
    settingObj.darkMode = true;
  } else {
    bodyEl.classList.remove("dark");
    settingObj.darkMode = false;
  }
}

function setSettingLocalStorage({ darkMode, clockMode }) {
  const settingJson = {
    darkMode: darkMode,
    clockMode: clockMode,
  };
  localStorage.setItem("settings", JSON.stringify(settingJson));
}

export function applySettingsWindowLoaded() {
  const settingJson = localStorage.getItem("settings");
  const bodyEl = document.querySelector("body");
  const clockEl = document.querySelector(".clock");
  const toggleClockEl = document.querySelector("#clockMode");
  const toggleThemeEl = document.querySelector("#darkMode");

  if (settingJson) {
    const settingObj = JSON.parse(settingJson);

    if (settingObj.darkMode) {
      bodyEl.classList.add("dark");
      toggleThemeEl.checked = true;
    } else {
      bodyEl.classList.remove("dark");
      toggleThemeEl.checked = false;
    }

    if (settingObj.clockMode) {
      clockEl.classList.remove("invisible");
      toggleClockEl.checked = false;
    } else {
      clockEl.classList.add("invisible");
      toggleClockEl.checked = true;
    }
  }
}
