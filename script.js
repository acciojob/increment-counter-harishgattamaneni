let count=0;
let element= document.getElementById("btn")
element.addEventListener("click",increment)
function increment(){
    count++;
    let paragraph=document.getElementById("count")
    paragraph.textContent=`${count}`
}