const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')

const mismatch = document.getElementById('mismatch')

function validatePassword(){
    if(password.value != confirm_password.value || (password.value === '' && confirm_password.value === '')) {
    
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
    mismatch.textContent = "*Passwords do not match";
    
    } else {
    mismatch.textContent = "";
    }
    if(password.value === confirm_password.value) {
        password.style.borderColor = "green";
        confirm_password.style.borderColor = "green";
        
    }
    
}

function passwordError() {
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
    mismatch.textContent = "*Passwords do not match";
    
}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

window.onload = passwordError;

