const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

function onDecrementBtnClick (event) {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

function onIncremenBtnClick(event) {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

decrementBtn.addEventListener("click", onDecrementBtnClick);

incrementBtn.addEventListener("click", onIncremenBtnClick);

