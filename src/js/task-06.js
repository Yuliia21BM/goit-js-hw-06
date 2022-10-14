const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", onInputBlur)

function onInputBlur(event) {
    return event.currentTarget.value.length === Number(event.currentTarget.getAttribute('data-length')) ?
        inputRef.classList.add('valid') :
        inputRef.classList.add('invalid');
}