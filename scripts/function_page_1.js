document.getElementById("name").addEventListener("focus",()=>{

   let input_tag= document.getElementById("name");
    clicked_on_input(input_tag);
});



document.getElementById("phone_number").addEventListener("focus",()=>{

    let input_tag= document.getElementById("phone_number");
    clicked_on_input(input_tag);
});

document.getElementById("company").addEventListener("focus",()=>{

    let input_tag= document.getElementById("company");
    clicked_on_input(input_tag);
});


const clicked_on_input=(input_tag)=>{

input_tag.style.boxShadow="rgb(8,207,101) 0px 1px 2px 0px,rgb(8,207,101) 0px 1px 3px 1px";


}

let next_btn=document.getElementById("next_btn");
next_btn.addEventListener("click",()=>{

    getDetails();

});



const getDetails=()=>{

let name=document.getElementById("name").value;
let phone_code=document.getElementById("phone_code").value;
let phone_number=document.getElementById("phone_number").value;
let company_name=document.getElementById("company").value;
let country_name=document.getElementById("country").value;
let checkbox=document.getElementById("agreement");

if(name=="")
{
    alert("Enter name first");
}
else if(phone_number.length!=10)
{
    alert("Phone number must be of 10 digits");
}
else if(company_name=="")
{
    alert("Enter company name first");
}
else if(country_name=="")
{
    alert("Select Your Country");
}
else if(checkbox.checked==false)
{
    alert("Please agree the Terms and Conditions");
}
else
{
    let object=JSON.parse(localStorage.getItem("person_details")) || {};

    object["name"]=name;
    object["phone_number"]=phone_number;
    object["company_name"]=company_name;
    object["country_name"]=country_name;

localStorage.setItem("person_details",JSON.stringify(object));

window.location.href="function_page_2.html";

}

}















document.getElementById("name").addEventListener("blur",()=>{

    let input_tag= document.getElementById("name");
     clicked_off_input(input_tag);
 });
 
 
 document.getElementById("phone_number").addEventListener("blur",()=>{

    let input_tag= document.getElementById("phone_number");
     clicked_off_input(input_tag);
 });
 
 document.getElementById("company").addEventListener("blur",()=>{

    let input_tag= document.getElementById("company");
     clicked_off_input(input_tag);
 });
 

 
 
 const clicked_off_input=(input_tag)=>{
 
 input_tag.style.backgroundColor="white";
 input_tag.style.border="1px solid";
 input_tag.style.borderColor="rgb(201, 192, 192)";
 input_tag.style.boxShadow="none";

 
 }
