const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const textColor = document.querySelector('span.color');

changeColorBtn.addEventListener('click', onchangeColor);

function onchangeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}