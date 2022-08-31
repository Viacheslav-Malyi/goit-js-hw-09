const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

console.log();

start.addEventListener('click', StartRandomColor);
stop.addEventListener('click', StopRandomColor);

const PROMPT_DELAY = 1000;
let isActive = false;

function StartRandomColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, PROMPT_DELAY);
}

function StopRandomColor() {
  isActive = false;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
