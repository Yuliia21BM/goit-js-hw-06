const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', onCangeFormSubmit);

function onCangeFormSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!");
    } else {
        console.log({
            email: email.value,
            password: password.value,
        });
        event.currentTarget.reset();
    }
}