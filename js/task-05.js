const inputRef = document.querySelector('#name-input');
console.log(inputRef);
const outputRef = document.querySelector('#name-output');
console.log(outputRef);

inputRef.addEventListener("input", (event) => {
    outputRef.textContent = event.currentTarget.value;
})