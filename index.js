const timeDisplay = document.querySelector("#timeDisplay");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let sec = 0;

startbtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});

pausebtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    clearInterval(intervalId);
  }
});

resetbtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  elapsedTime = 0;
  hrs = 0;
  mins = 0;
  sec = 0;
  updateDisplay();
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  sec = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor(elapsedTime / (1000 * 60 * 60));

  updateDisplay();
}

function updateDisplay() {
  sec = pad(sec);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${sec}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}
