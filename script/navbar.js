let downarrow = document.querySelector(".downarrow");
downarrow.onclick = () => {
    downarrow.style.display = "none"
    let dropdowntwo = document.querySelector(".dropdowntwo");
    dropdowntwo.style.display = "none";
    let dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "grid";

    let uparrow = document.querySelector(".uparrow")
    uparrow.style.display = "inline";
    uparrow.onclick = () => {
        downarrow.style.display = "inline"
        dropdown.style.display = "none";
        uparrow.style.display = "none";

    }
}

///////////////////////////////////DROPDOWN TWO//////////////////////

let downarrow_two = document.querySelector(".downarrow_two");
downarrow_two.onclick=()=>{
console.log("jhgfhg")
let dropdown = document.querySelector(".dropdown");
dropdown.style.display = "none";
downarrow_two.style.display = "none"
let dropdowntwo = document.querySelector(".dropdowntwo");
    dropdowntwo.style.display = "grid";

    let uparrow_two = document.querySelector(".uparrow_two")
    uparrow_two.style.display = "inline";
    uparrow_two.onclick = () => {
        downarrow_two.style.display = "inline"
        dropdowntwo.style.display = "none";
        uparrow_two.style.display = "none";

    }
}

/////////////////////DROPDOWN THREE////////////////////////////////////////////////
let downarrow_three = document.querySelector(".downarrow_three");
downarrow_three.onclick=()=>{
console.log("jhgfhg")
downarrow_three.style.display = "none"
let dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "grid";

    let uparrow_three = document.querySelector(".uparrow_three")
    uparrow_three.style.display = "inline";
    uparrow_three.onclick = () => {
        downarrow_three.style.display = "inline"
        dropdown.style.display = "none";
        uparrow_three.style.display = "none";

    }
}