
document.querySelector("form").addEventListener("submit",reset);

let signup_details_arr=JSON.parse(localStorage.getItem("SignupDetails"));

function reset(event){

    event.preventDefault();

    let email_value=document.querySelector("#email").value;
    if(email_value=="")
    {
        alert("enter correct email");
    }
    else{

        let flag=false;
      signup_details_arr.forEach(function(el){

      if(el.validatedEmail==email_value)
      {

        localStorage.setItem("reset",email_value);
        flag=true;
      }

      })

    if(flag==true)
    {
      let x = Math. floor(100000 + Math. random() * 900000);
      localStorage.setItem("OTP",x);
      alert(`${x}`);

      window.location.href="enter_otp.html";
    }
    else
    {
        alert("account doent exist");
    }


    }
    
}