const loginBtn = document.getElementById('loginButton');
const userAlert = document.getElementById('usernameAlert');
const passwordAlert = document.getElementById('passwordAlert');
const inputUser = document.getElementById('userName');
const inputPassword = document.getElementById('password');
let defaultDisplayAlert = false;
let validPassword = false;
let validUsername = false;


function displayAlert(element) {
    if(defaultDisplayAlert === true) {
        element.style.display = 'block';
    } else {
        element.display = 'none';
    }
}

function userIsValid(userValue) {
    const userLabel = document.getElementById('userLabel');
    if(userValue === '') {
        defaultDisplayAlert = true;
        displayAlert(userAlert);
        userAlert.innerText = 'You must enter a username';
        userLabel.classList.add('loginForm__label--error')
        inputUser.setAttribute('aria-invalid', 'true');
    } else {
        defaultDisplayAlert = false;
        userAlert.innerText = '';
        userLabel.classList.remove('loginForm__label--error');
        inputUser.setAttribute('aria-invalid', 'false');
        validUsername = true;
    }
}

const lowercaseLetters = /[a-z]/g;
const uppercaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

function passwordIsValid (passwordValue) {
    const passwordLabel = document.getElementById('passwordLabel');
    if(passwordValue === '') {
        defaultDisplayAlert = true;
        displayAlert(passwordAlert);
        passwordAlert.innerText = 'You must enter a password';
        passwordLabel.classList.add('loginForm__label--error')
        inputPassword.setAttribute('aria-invalid', 'true');
    } else if(passwordValue.length < 6 || !passwordValue.match(lowercaseLetters) ||
        !passwordValue.match(uppercaseLetters) || !passwordValue.match(numbers)) {
        defaultDisplayAlert = true;
        displayAlert(passwordAlert);
        passwordAlert.innerText = 'Password must be at least 6 characters long, must have one uppercase, one number and one lowercase';
        passwordLabel.classList.add('loginForm__label--error')
        inputPassword.setAttribute('aria-invalid', 'true');
    } else {
        defaultDisplayAlert = false;
        passwordAlert.innerText = '';
        validPassword = true;
        passwordLabel.classList.remove('loginForm__label--error')
        inputPassword.setAttribute('aria-invalid', 'false');
    }
}



function loginAction() {
    const inputUserName = document.getElementById('userName').value;
    const inputPassword = document.getElementById('password').value;
    userIsValid(inputUserName);
    passwordIsValid(inputPassword);
    if(validUsername === true && validPassword === true) {
        console.log('you successfully loged in')
        window.location.href = '/after-login-page.html';
    }

}


loginBtn.addEventListener('click', loginAction);

