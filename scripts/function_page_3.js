document.getElementById("job_role").addEventListener("focus",()=>{

    let input_tag= document.getElementById("job_role");
     clicked_on_input(input_tag);
 });
 

 document.getElementById("department").addEventListener("focus",()=>{

    let input_tag= document.getElementById("department");
     clicked_on_input(input_tag);
 });
 
 
 const clicked_on_input=(input_tag)=>{
 
 input_tag.style.boxShadow="rgb(8,207,101) 0px 1px 2px 0px,rgb(8,207,101) 0px 1px 3px 1px";
 
 
 }
 

 
 document.getElementById("job_role").addEventListener("blur",()=>{
 
     let input_tag= document.getElementById("job_role");
      clicked_off_input(input_tag);
  });


document.getElementById("department").addEventListener("blur",()=>{
 
    let input_tag= document.getElementById("department");
     clicked_off_input(input_tag);
 });
  

  
 
  
  
  const clicked_off_input=(input_tag)=>{
  
  input_tag.style.backgroundColor="white";
  input_tag.style.border="1px solid";
  input_tag.style.borderColor="rgb(201, 192, 192)";
  input_tag.style.boxShadow="none";
 
  
  }






  let next_btn=document.getElementById("next_btn");
next_btn.addEventListener("click",()=>{

    getDetails();

});



const getDetails=()=>{

let job_role=document.getElementById("job_role").value;
let department=document.getElementById("department").value;

if(job_role=="")
{
    alert("Enter Job Role First");
}

else if(department=="")
{
    alert("Enter Department Name First");
}
else
{
    let object=JSON.parse(localStorage.getItem("person_details")) || {};

    object["job_role"]=job_role;
    object["department"]=department;

localStorage.setItem("person_details",JSON.stringify(object));

window.location.href="function_page_4.html";

}

}
 