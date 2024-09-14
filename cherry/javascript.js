
let eye = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-outline.svg";
    }else{
        password.type = "password";
        eyeicon.src = "eye-off-outline.svg";
    }

}
