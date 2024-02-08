let usernameInput = document.getElementById("usernameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPasswordInput");
let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

function username(){
    let usernameValue = usernameInput.value;

    if(usernameValue === ""){
        usernameError.textContent = "Email must end with @gmail.com";
    }
    else{
        usernameError.textContent = "";
    }
}

function email(){
    let emailValue = emailInput.value;

    if(!(emailValue.endsWith("@gmail.com"))){
        emailError.textContent = "Email must end with @gmail.com";
    }
    else{
        emailError.textContent = "";
    }
}

function password(){
    let userInput = passwordInput.value;
    if(userInput.length < 8){
        passwordError.textContent = "Password must contain minimum 8 charaters";
    }
    else{
        passwordError.textContent = "";
    }
}

function confirmPassword(){
    let passwordInputValue = passwordInput.value;
    const confirmPasswordInputValue = confirmPasswordInput.value;
    if(passwordInputValue !== confirmPasswordInputValue){
        confirmPasswordError.textContent = "Given confirm password is not same as new password";
    }
    else{
        confirmPasswordError.textContent = "";
    }
}

function signIn(){
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;

    if(usernameValue === ""){
        usernameError.textContent = "This have to be filled.";
    }
    else{
        usernameError.textContent = "";
    }

    if(passwordValue === ""){
        passwordError.textContent = "This have to be filled.";
    }
    else{
        passwordError.textContent = "";
    }

    if(usernameValue.endsWith("@gmail.com") && passwordValue.length >= 8){
        window.location.assign("home.html");
    }
    else{
        pass;
    }
}

function logAccount(){
    window.location.assign("logIn.html");
}

let pwView = document.getElementById("showPassword");
let show = false;
function signinShowPassword(){
    if(show === false){
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
        pwView.textContent = "hide";
        show = true;
    }
    else{
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
        pwView.textContent = "show";
        show = false;
    }
}

