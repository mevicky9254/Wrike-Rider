let start_btn2=document.getElementById("start_btn2");
start_btn2.addEventListener("click",()=>{

    clicked_on_start();
});





const clicked_on_start=()=>{

let email=document.getElementById("start_email").value;

if(email.includes("@") && email!="@gmail.com" && email.includes(".com"))
{
   
    let SignupDetails_arr=JSON.parse(localStorage.getItem("SignupDetails")) || [];
    let flag=false;

    SignupDetails_arr.forEach(function(el){

    if(el.validatedEmail==email)
    {
        flag=true;
        let object={};
        object["email"]=email;
        
        localStorage.setItem("person_details",JSON.stringify(object));

     let arr=JSON.parse(localStorage.getItem("details_arr")) || [];
     
     let check=false;
     arr.forEach(function(el){
           
          if(el.email==email)
          {
            check=true;
            window.location.href="function_page_4.html"; 
          }
     });

          if(check==false)
          {
           window.location.href="function_page_1.html";
          } 
    }

    });


    if(flag==false)
    {
      alert("Account doesn't exist");
    }

}
else
{
alert("Wrong email");

}

}


