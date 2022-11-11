let str;

document.getElementById("1").addEventListener("click",()=>{

let selected=document.getElementById("1");
clicked_on_employees(selected);

});

document.getElementById("2").addEventListener("click",()=>{

    let selected=document.getElementById("2");
    clicked_on_employees(selected);
    
    });

document.getElementById("3").addEventListener("click",()=>{

    let selected=document.getElementById("3");
    clicked_on_employees(selected);

});


document.getElementById("4").addEventListener("click",()=>{

    let selected=document.getElementById("4");
    clicked_on_employees(selected);

});



document.getElementById("5").addEventListener("click",()=>{

let selected=document.getElementById("5");
clicked_on_employees(selected);

});

document.getElementById("6").addEventListener("click",()=>{

    let selected=document.getElementById("6");
    clicked_on_employees(selected);
    
    });

document.getElementById("7").addEventListener("click",()=>{

    let selected=document.getElementById("7");
    clicked_on_employees(selected);

});


document.getElementById("8").addEventListener("click",()=>{

    let selected=document.getElementById("8");
    clicked_on_employees(selected);

});


const clicked_on_employees=(selected)=>{

    let id_1=document.getElementById("1");
    let id_2=document.getElementById("2");
    let id_3=document.getElementById("3");
    let id_4=document.getElementById("4");
    let id_5=document.getElementById("5");
    let id_6=document.getElementById("6");
    let id_7=document.getElementById("7");
    let id_8=document.getElementById("8");

for(let i=1;i<=8;i++)
{

  if(document.getElementById(`${i}`)==selected)
  {

    document.getElementById(`${i}`).style.boxShadow="rgb(8,207,101) 0px 0px 0px 3px";
    str= document.getElementById(`${i}`).innerText;
  }
  else
  {
    document.getElementById(`${i}`).style.boxShadow="none";
  }
  }
  

}
  

let next_btn=document.getElementById("next_btn");
next_btn.addEventListener("click",()=>{

clicked_on_next();

});



const clicked_on_next=()=>{

 let object=JSON.parse(localStorage.getItem("person_details")) || {};

   object["employees"]=str;

localStorage.setItem("person_details",JSON.stringify(object));

window.location.href="function_page_3.html";

}




