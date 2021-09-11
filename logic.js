
let subBtn = document.querySelector("button");
let bug = document.querySelector(".buge");
let buge = document.querySelector(".bug");
let inputS = document.querySelector("input").value;

subBtn.addEventListener("click", function(){
    bug.style.visibility = "visible";
    buge.style.visibility = "visible";
})

if(document.querySelector("input").value = ""){
    bug.style.visibility = "hidden";
    buge.style.visibility = "hidden";
}