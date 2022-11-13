let object=JSON.parse(localStorage.getItem("person_details")) || {};

let space=document.getElementById("space");
space.style.fontSize="14px";
space.style.marginLeft="2px";
space.innerText=object.space;



let arr=JSON.parse(localStorage.getItem("details_arr")) || [];



let single_person_arr=arr.filter(function(el){

    return object.email==el.email;
});

document.getElementById("login").innerText=single_person_arr[0].name[0];

display(arr);
function display(arr)
{

    document.querySelector("tbody").innerHTML=null;
    let object=JSON.parse(localStorage.getItem("person_details")) || {};

    arr.forEach(function(el,i){

     if(object.email==el.email)
     {

     let tr=document.createElement("tr");

     let td1=document.createElement("td");
     td1.innerText=el.first_project;

     let td2=document.createElement("td");
     td2.innerText=el.task1;

     let td3=document.createElement("td");
     td3.innerText=el.task2;
     
     let td4=document.createElement("td");
     td4.innerText=el.task3;


     let td5=document.createElement("td");
     td5.innerText="Remove";
     td5.setAttribute("class","td5");
     td5.addEventListener("click",()=>{

        remove(i);
     });
     
     tr.append(td1,td2,td3,td4,td5);

     document.querySelector("tbody").append(tr);

    }

    }); 
}


function remove(i){

    let arr=JSON.parse(localStorage.getItem("details_arr")) || [];

    arr.splice(i,1);

    localStorage.setItem("details_arr",JSON.stringify(arr));

    display(arr);

}




function go_to_home_page(){

    window.location.href="index.html";
}

function sorting(){


    let arr=JSON.parse(localStorage.getItem("details_arr")) || [];

    arr.sort(function(a,b){

        if (a.first_project>b.first_project) return 1;
        if (a.first_project<b.first_project) return -1;
        return 0;
    })

    display(arr);

}


