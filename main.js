const password = document.getElementById('password');
const togglePassword = document.getElementById('toggle');

const showHide = () => {
    if(password.type === 'password') {
        password.setAttribute('type', 'text');
        togglePassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('hide');
    }
}