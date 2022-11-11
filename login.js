let LSdata=JSON.parse(localStorage.getItem("SignupDetails"));
//console.log(LSdata)

let login=document.querySelector("#login");

login.onclick=()=>{
let email=document.querySelector("#email").value
let password=document.querySelector("#password").value


    let flag=false;
    let count=0;
    LSdata.forEach(function(el){
if(el.validatedPassword==password && el.validatedEmail==email){
    flag=true;
}
})
if(flag==true){
    window.location.replace("register.html")
}

else{
    alert("invalid password or email")
}

   


}

