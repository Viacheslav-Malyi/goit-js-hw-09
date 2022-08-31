import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const link = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const { dateInput, startBtn, days, hours, minutes, seconds } = link;

startBtn.addEventListener('click', startCountdown);
startBtn.setAttribute('disabled', true);

function startCountdown() {
  intevalId = setInterval(() => {
    const currentDate = Date.now();
    const deltaTime = convertMs(countdownTimer - currentDate);
    if (countdownTimer < Date.now()) {
      clearInterval(intevalId);
      Notiflix.Notify.success('The timer is out');
    }
    if (countdownTimer > currentDate) {
      updateInterface(deltaTime);
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    countdownTimer = selectedDates[0].getTime();
    currentDate = Date.now();
    checkDate(currentDate, countdownTimer);
  },
};

flatpickr(dateInput, options);

function checkDate(currentDate, countdownTimer) {
  if (currentDate > countdownTimer) {
    Notiflix.Notify.failure('Please choose a date in the future');
    startBtn.setAttribute('disabled', true);
    return;
  }
  startBtn.removeAttribute('disabled');
}

function updateInterface(deltaTime) {
  days.textContent = deltaTime.days;
  hours.textContent = deltaTime.hours;
  minutes.textContent = deltaTime.minutes;
  seconds.textContent = deltaTime.seconds;
}
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
