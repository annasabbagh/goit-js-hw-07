const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('span#value'),
};

let value = 0;

function decreaseValue() {
  value -= 1;
  refs.valueEl.textContent = value;
}

function increaseValue() {
  value += 1;
  refs.valueEl.textContent = value;
}

refs.decrementBtn.addEventListener('click', decreaseValue);
refs.incrementBtn.addEventListener('click', increaseValue);
