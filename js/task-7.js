const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleTextChange = () =>
  (textRef.style.fontSize = `${fontSizeControlRef.value}px`);

fontSizeControlRef.addEventListener('input', handleTextChange);
