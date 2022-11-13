let change_password=document.querySelector("#signup");
change_password.onclick=()=>{


let password=document.querySelector("#password").value;
let confirmedpassword=document.querySelector("#confirmedpassword").value;


if(password=="")
{
    alert("Enter password");
}
else if(confirmedpassword=="")
{
    alert("Enter confirm password");
}
else if(password!=confirmedpassword)
{
    alert("Incorrect password");
}
else if(password==confirmedpassword)
{
   
    let signup_data_arr=JSON.parse(localStorage.getItem("SignupDetails")) || [];
    let reset_email=localStorage.getItem("reset");
    console.log(reset_email);
    console.log(signup_data_arr);
    signup_data_arr.forEach(function(el){

      if(el.validatedEmail==reset_email)
      {
        let x=document.querySelector("#password").value;
        el.validatedPassword=x;
      }


    });

    localStorage.setItem("SignupDetails",JSON.stringify(signup_data_arr));
    window.location.href="login.html";



    

}




}