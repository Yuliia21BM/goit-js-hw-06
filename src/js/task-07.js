const inputRef = document.querySelector('#font-size-control');
const editableText = document.querySelector('#text');

inputRef.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    editableText.style.fontSize = event.currentTarget.value + "px";
}