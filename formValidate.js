const form = document.getElementById('form');
const username = document.getElementById('name-input');
const email = document.getElementById('email-input');
const message = document.getElementById('message-input')
const submitBtn = document.getElementById('submit-btn')
const successmessage = document.getElementById('success-message')

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const receiveMessage = (element, message) => {
    const messageControl = element.parentElement;
    const successDisplay = messageControl.querySelector('#success-message');

    successDisplay.innerText = message;
    successmessage.classList.add('success-message')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messValue = message.value.trim();
    let isValid = true
    if(usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        isValid = false
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false
    } else {
        setSuccess(email);
    }
    if(messValue === '') {
        setError(message, 'message is required');
        isValid = false
    } else if (messValue.length < 10) {
        setError(message, 'At least 10 character is required');
        isValid = false
    }
    else {
        setSuccess(message);
    }
    return isValid
};
function validate(){
    if (validateInputs()){
        receiveMessage(submitBtn, "You successfuly sent the message, We will send the responce soon!!")
    }
}