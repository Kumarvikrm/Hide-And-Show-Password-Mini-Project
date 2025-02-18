let passwordEl = document.getElementById("password");
let eyeIconEl = document.getElementById("eyeIcon");


eyeIconEl.onclick = function(){
  if(passwordEl.type === "password"){
    passwordEl.type = "text";
    eyeIconEl.src = "./img/eye-open.png";
  }else{
    passwordEl.type = "password"
    eyeIconEl.src = "./img/eye-close.png"
  }
}