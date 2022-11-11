document.getElementById("project").addEventListener("focus",()=>{

    let input_tag= document.getElementById("project");
     clicked_on_input(input_tag);
 });


 const clicked_on_input=(input_tag)=>{
 
    input_tag.style.boxShadow="rgb(8,207,101) 0px 1px 2px 0px,rgb(8,207,101) 0px 1px 3px 1px";
    
    
 }




 document.getElementById("project").addEventListener("blur",()=>{

    let input_tag= document.getElementById("project");
     clicked_off_input(input_tag);
 });


 const clicked_off_input=(input_tag)=>{
  
    input_tag.style.backgroundColor="white";
    input_tag.style.border="1px solid";
    input_tag.style.borderColor="rgb(201, 192, 192)";
    input_tag.style.boxShadow="none";
   
    
}

document.getElementById("project").addEventListener("input",()=>{

show_input();

});



const show_input=()=>{


let entered=document.getElementById("project").value;

document.getElementById("enter_1").innerText=entered;
document.getElementById("enter_2").innerText=entered;

}


let object=JSON.parse(localStorage.getItem("person_details")) || {};
let entered_space=object.space;
document.querySelector("#table_left_div>div>p").innerText=entered_space;





document.getElementById("next_btn").addEventListener("click",()=>{

getDetails();
});


const getDetails=()=>{

    let first_project=document.getElementById("project").value;

if(first_project=="")
{
    alert("Enter oroject name first");
}
else
{
    let object=JSON.parse(localStorage.getItem("person_details")) || {};

    object["first_project"]=first_project;

    localStorage.setItem("person_details",JSON.stringify(object));
    window.location.href="function_page_6.html";
}

}