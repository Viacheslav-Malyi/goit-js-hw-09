const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', StartRandomColor);
btnStop.addEventListener('click', StopRandomColor);

const PROMPT_DELAY = 1000;
let isActive = false;
let intervalId = null;

btnStop.setAttribute('disabled', true);

function StartRandomColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, PROMPT_DELAY);
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

function StopRandomColor() {
  isActive = false;
  clearInterval(intervalId);
  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
