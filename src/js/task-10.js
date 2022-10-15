const inputValue = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
boxesRef.classList.add('boxes');
boxesRef.style.display = "flex";
boxesRef.style['flex-wrap'] = "wrap";
boxesRef.style.gap = "20px";
boxesRef.style.margin = "20px";

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)


function createBoxes() {
  const amountValue = inputValue.value;
  const boxCounterSize = counterSize();

  for (let box = 0; box < amountValue; box += 1) {
    const boxElement = document.createElement('div');
    boxElement.style.width = boxCounterSize() + "px"; 
    boxElement.style.height = boxElement.style.width; 
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.border = "1px solid #000000";
    boxesRef.append(boxElement);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputValue.value = "";
}

function counterSize() {
  let count = 20;
  return function () {
    count += 10;
    return count;
  }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
