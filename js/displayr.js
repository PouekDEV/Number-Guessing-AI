var ainumber = 0
var humannumber = 0
var numbers = JSON.parse(localStorage.getItem("ainumber"));
ainumber = numbers.numberai
humannumber = numbers.human
document.getElementById("human").innerHTML = humannumber
document.getElementById("ai").innerHTML = ainumber
function again(){
    document.location.href = "index.html"
}