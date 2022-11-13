document.querySelector("form").addEventListener("submit",reset);

let signup_details_arr=JSON.parse(localStorage.getItem("SignupDetails"));
let saved_OTP=localStorage.getItem("OTP");
function reset(event){

    event.preventDefault();

    let OTP_value=document.querySelector("#email").value;
    if(OTP_value=="" || OTP_value.length!=6)
    {
        alert("incorrect OTP");
    }
    else{
       
      if(saved_OTP==OTP_value)
      {
        window.location.href="change_password.html";
      }
      else
      {
        alert("wrong OTP");
      }
      

    }
    
}
