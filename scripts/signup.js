let signup=document.querySelector("#signup");
signup.onclick=()=>{

let name=document.querySelector("#name").value
let email=document.querySelector("#email").value
let mobile=document.querySelector("#mobile").value
let password=document.querySelector("#password").value
let confirmedpassword=document.querySelector("#confirmedpassword").value
let validatedEmail;
let validatedPassword;

let flag=0;
if(email.includes("@") && email.includes(".com")&& email.length>=8){
    validatedEmail=email;
    flag++;
}else if(email==""){
    let emailbox=document.querySelector("#email");
    emailbox.style.borderColor="red";
    alert("Enter an email")
    flag=0;
}else{
    alert("Enter a valid email")
}

if(password===confirmedpassword){
validatedPassword=password;
flag++;
}
else if(password==""){
    alert("Enter the password")
    flag=0;
}else if( password.length<8){
    alert("password should be equal to or more than eight char")
    flag=0;
}
else{
    alert("password did not match")
    flag=0;
}

if(flag==2){
let obj={
    name,
    validatedEmail,
    mobile,
    validatedPassword,
}
console.log(obj);

let LSdata=JSON.parse(localStorage.getItem("SignupDetails")) || [];
LSdata.push(obj);

localStorage.setItem("SignupDetails",JSON.stringify(LSdata));
window.location.replace("login.html");
console.log(password)

}
}