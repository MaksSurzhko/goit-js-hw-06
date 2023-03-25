const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const rightLength = Number(input.dataset.length);
    const nowLength = input.value.length;

    if (rightLength === nowLength) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
});