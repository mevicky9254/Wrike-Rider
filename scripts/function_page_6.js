



document.getElementById("1").addEventListener("focus",()=>{

    let input_tag= document.getElementById("1");
     clicked_on_input(input_tag);
 });


 document.getElementById("2").addEventListener("focus",()=>{

    let input_tag= document.getElementById("2");
     clicked_on_input(input_tag);
 });



 document.getElementById("3").addEventListener("focus",()=>{

    let input_tag= document.getElementById("3");
     clicked_on_input(input_tag);
 });



 const clicked_on_input=(input_tag)=>{
 
    input_tag.style.boxShadow="rgb(8,207,101) 0px 1px 2px 0px,rgb(8,207,101) 0px 1px 3px 1px";
    
    
 }





 document.getElementById("1").addEventListener("blur",()=>{

    let input_tag= document.getElementById("1");
     clicked_off_input(input_tag);
 });

 document.getElementById("2").addEventListener("blur",()=>{

    let input_tag= document.getElementById("2");
     clicked_off_input(input_tag);
 });

 document.getElementById("3").addEventListener("blur",()=>{

    let input_tag= document.getElementById("3");
     clicked_off_input(input_tag);
 });



 const clicked_off_input=(input_tag)=>{
  
    input_tag.style.backgroundColor="white";
    input_tag.style.border="1px solid";
    input_tag.style.borderColor="rgb(201, 192, 192)";
    input_tag.style.boxShadow="none";
   
    
}




let object=JSON.parse(localStorage.getItem("person_details")) || {};

document.querySelector("#table_left_div>div>p").innerText=object.space;
document.getElementById("enter_1").innerText=object.first_project;
document.getElementById("enter_2").innerText=object.first_project;




document.getElementById("1").addEventListener("input",()=>{

    show_input1();
    
 });

 document.getElementById("2").addEventListener("input",()=>{

    show_input2();
    
 });
 
 
 document.getElementById("3").addEventListener("input",()=>{

    show_input3();
    
 });
    


const show_input1=()=>{


let entered=document.getElementById("1").value;

document.getElementById("task1").innerText=entered;


}



const show_input2=()=>{


let entered=document.getElementById("2").value;

document.getElementById("task2").innerText=entered;


}


const show_input3=()=>{


let entered=document.getElementById("3").value;

document.getElementById("task3").innerText=entered;


}



document.getElementById("next_btn").addEventListener("click",()=>{

getDetails();
});



const getDetails=()=>{

    let task1=document.getElementById("1").value;
    let task2=document.getElementById("2").value;
    let task3=document.getElementById("3").value;


    let object=JSON.parse(localStorage.getItem("person_details")) || {};

    object["task1"]=task1;
    object["task2"]=task2;
    object["task3"]=task3;

    localStorage.setItem("person_details",JSON.stringify(object));

    let arr=JSON.parse(localStorage.getItem("details_arr")) || [];

    arr.push(object);

    localStorage.setItem("details_arr",JSON.stringify(arr));
    window.location.href="function_page_final.html";


}

