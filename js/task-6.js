const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', hanldeInputBlur);

function hanldeInputBlur(event) {
  inputRef.classList.add('invalid');
  if (
    event.target.value.length === Number(inputRef.getAttribute('data-length'))
  ) {
    inputRef.classList.replace('invalid', 'valid');
  } else inputRef.classList.remove('valid');
}
