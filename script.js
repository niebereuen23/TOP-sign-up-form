const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const passError = document.querySelector('#pass-error');
const form = document.querySelector('#sign-up-form');


password.addEventListener('keyup', e => {
    
    if (passwordConfirm.value !== password.value) {
        passwordConfirm.style = 'outline: 2px solid red; border-radius: 2px;';
        passError.innerText = '*Passwords do not match';
        passError.style = 'color: red';
        
    } else {
        passError.textContent = '';
        passwordConfirm.style = '';
    }
})

passwordConfirm.addEventListener('keyup', e => {
    
    if (passwordConfirm.value !== password.value) {
        passwordConfirm.style = 'outline: 2px solid red; border-radius: 2px;';
        passError.innerText = '*Passwords do not match';
        passError.style = 'color: red';        
    } else {
        passError.textContent = '';
        passwordConfirm.style = '';

    }
})

form.addEventListener('submit', e => {
    if (passwordConfirm.value !== password.value) {
        e.preventDefault();
    }
})

// console.log(password.innerText);
