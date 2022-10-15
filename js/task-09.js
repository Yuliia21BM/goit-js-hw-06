const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const textColor = document.querySelector('span.color');

changeColorBtn.addEventListener('click', onchangeColor);

function onchangeColor() {
  let randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}