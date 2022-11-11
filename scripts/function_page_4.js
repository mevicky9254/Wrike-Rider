document.getElementById("space").addEventListener("focus",()=>{

    let input_tag= document.getElementById("space");
     clicked_on_input(input_tag);
 });


 const clicked_on_input=(input_tag)=>{
 
    input_tag.style.boxShadow="rgb(8,207,101) 0px 1px 2px 0px,rgb(8,207,101) 0px 1px 3px 1px";
    
    
 }




 document.getElementById("space").addEventListener("blur",()=>{

    let input_tag= document.getElementById("space");
     clicked_off_input(input_tag);
 });


 const clicked_off_input=(input_tag)=>{
  
    input_tag.style.backgroundColor="white";
    input_tag.style.border="1px solid";
    input_tag.style.borderColor="rgb(201, 192, 192)";
    input_tag.style.boxShadow="none";
   
    
    }
  







document.getElementById("next_btn").addEventListener("click",()=>{

getDetails();
});


const getDetails=()=>{

let entered_space=document.getElementById("space").value;

if(entered_space=="")
{
    alert("Enter space first");
}
else
{
    let object=JSON.parse(localStorage.getItem("person_details")) || {};

    object["space"]=entered_space;

    localStorage.setItem("person_details",JSON.stringify(object));
    window.location.href="function_page_5.html";
}

}