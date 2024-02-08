let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");

function username(){
    let usernameValue = usernameInput.value;

    if(usernameValue === ""){
        usernameError.textContent = "This have to be filled.";
    }
    else{
        usernameError.textContent = "";
    }
}

function password(){
    let passwordValue = passwordInput.value;

    if(passwordValue === ""){
        passwordError.textContent = "This have to be filled.";
    }
    else{
        passwordError.textContent = "";
    }
}

function login(){
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

    if(usernameValue !== "" && passwordValue !== ""){
        window.location.assign("home.html");
    }
}

let lpwView = document.getElementById("showPassword");
let lshow = false;
function loginShowPassword(){
    if(lshow === false){
        passwordInput.type = "text";
        lpwView.textContent = "hide";
        lshow = true;
    }
    else{
        passwordInput.type = "password";
        lpwView.textContent = "show";
        lshow = false;
    }
}