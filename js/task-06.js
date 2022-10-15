const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", onInputBlur);
inputRef.addEventListener("focus", onInputFocus);

function onInputBlur(event) {
    event.currentTarget.value.length === Number(event.currentTarget.getAttribute('data-length')) ?
        inputRef.classList.add('valid') :
        inputRef.classList.add('invalid');
}

function onInputFocus(event) {
    event.currentTarget.value = "";
    inputRef.classList.remove('valid') || inputRef.classList.remove('invalid');
}