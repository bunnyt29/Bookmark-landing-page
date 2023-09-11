var button = document.getElementById('submit');
var response = document.getElementById('response');
var emailField = document.getElementById('email_address');
var errorMessage = document.getElementById('hidden_error');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function() {
    var email = emailField.value;
    if (validateEmail(email)) {
    response.innerHTML = 'Hiya Cowboy, this email will work for us 🤠';
    } else {
    emailField.classList.add('error');
    errorMessage.style.display = 'block';
    button.style.margin = 0;
    }
});