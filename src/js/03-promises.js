import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');
form.addEventListener('submit', formPromisSbmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function formPromisSbmit(event) {
  event.preventDefault();

  let firstDelayInput = Number(firstDelay.value);
  let delayStepInput = Number(delayStep.value);
  let amountInput = Number(amount.value);

  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, firstDelayInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelayInput += delayStepInput;
  }
}
