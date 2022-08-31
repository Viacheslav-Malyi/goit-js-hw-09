//const start = document.querySelector('[data-start]');
//const stop = document.querySelector('[data-stop]');
//const body = document.querySelector('body');

//console.log();

//start.addEventListener('click', StartRandomColor);
//stop.addEventListener('click', StopRandomColor);

//const PROMPT_DELAY = 1000;
//let isActive = false;

//function StartRandomColor() {
//  if (isActive) {
//    return;
//  }
//  isActive = true;
//  intervalId = setInterval(() => {
//    body.style.backgroundColor = getRandomHexColor();
//  }, PROMPT_DELAY);
//}

//function StopRandomColor() {
//  isActive = false;
//  clearInterval(intervalId);
//}

//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}
const btnStartRef = document.querySelector('[data-start]');
const btnStoptRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

btnStartRef.addEventListener('click', startColorSwitch);
btnStoptRef.addEventListener('click', stopColorSwitch);

let startId = null;
btnStoptRef.setAttribute('disabled', 'disabled');

function startColorSwitch() {
  startId = setInterval(() => {
    changeColor();
  }, 1000);
  btnStartRef.setAttribute('disabled', 'disabled');
  btnStoptRef.removeAttribute('disabled');
}

function stopColorSwitch() {
  clearInterval(startId);
  btnStartRef.removeAttribute('disabled');
  btnStoptRef.setAttribute('disabled', 'disabled');
}

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
