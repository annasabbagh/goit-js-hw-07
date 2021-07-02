const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const onInput = () => {
  refs.output.textContent = refs.input.value ? refs.input.value : 'незнакомец';
};
refs.input.addEventListener('input', onInput);
