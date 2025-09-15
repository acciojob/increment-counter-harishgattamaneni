let count=0;
let element= document.getElementById("incrementBtn")
element.addEventListener("click",increment)
function increment(){
    count++;
    let paragraph=document.getElementById("counter")
    paragraph.textContent=`${count}`
}