const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')

const mismatch = document.getElementById('mismatch')

function validatePassword(){
    if(password.value != confirm_password.value || (password.value === '' && confirm_password.value === '')) {
    confirm_password.setCustomValidity("Error: Passwords don't match. Please try again.");
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
    mismatch.textContent = "*Passwords do not match";
    mismatch.classList.add('error');
    } else {
    confirm_password.setCustomValidity('');
    mismatch.textContent = "";
    }
    if(password.value === confirm_password.value) {
        password.style.borderColor = "#3cd33c";
        confirm_password.style.borderColor = "#3cd33c";
        
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;



window.onload = redPassword;

function redPassword() {
    password.style.borderColor = "#C13838";
    confirm_password.style.borderColor = "#C13838";
    mismatch.textContent = "*Passwords do not match";
    mismatch.classList.add("error");
}
