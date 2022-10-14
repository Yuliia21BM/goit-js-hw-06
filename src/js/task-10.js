const inputValue = document.querySelector('input');
console.log(inputValue);
const createBtn = document.querySelector('[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('[data-destroy]');
console.log(destroyBtn);

// одне число не ітерабельне треба його спочатку розділити від 1 і до введеного
createBtn.addEventListener('click', createBoxes(inputValue.value));
// destroyBtn.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  amount.map(box => {
    const boxElement = document.createElement('div');
    boxElement.style.width = 30 + "px"; 
    boxElement.style.height = 30 + "px"; 
    boxElement.style.backgroundColor = getRandomHexColor();
  })
}

// function destroyBoxes()

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
