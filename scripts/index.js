let start_btn2=document.getElementById("start_btn2");
start_btn2.addEventListener("click",()=>{

    clicked_on_start();
});





const clicked_on_start=()=>{

let email=document.getElementById("start_email").value;

if(email.includes("@") && email!="@gmail.com" && email.includes(".com"))
{
   

let object={};
object["email"]=email;

localStorage.setItem("person_details",JSON.stringify(object));
window.location.href="function_page_1.html";

}
else
{
alert("Wrong email");

}

}