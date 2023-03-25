const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit) 
 
function onSubmit(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    if (email.value === '' || password.value === '') {
        return alert('Заповніть всі поля!')
    }
    console.log(`email: ${email.value}, password: ${password.value}`)
    event.currentTarget.reset()
}
