let try_for_free_btn=document.getElementById("try_for_free");
try_for_free_btn.addEventListener("click",()=>{

    clicked_on_start();
});





function clicked_on_start(){

let email=document.getElementById("business_email").value;

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
        window.location.href="function_page_1.html"; 
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
