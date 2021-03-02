let btnSelect = document.querySelector("button");
let uList = document.querySelector("ul");

btnSelect.addEventListener("click",callFunc);

function callFunc(){
    let inputVal = document.querySelector("input").value;
    let newList = document.createElement("li");
    newList.innerText=inputVal;
    uList.appendChild(newList);
    document.querySelector("input").value="";

    newList.addEventListener("click",function(e){
        let confirmList = confirm("want to remove list");
        if(confirmList==true){
            uList.removeChild(e.target);
        }
    })

}


