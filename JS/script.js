var holder = document.getElementsByClassName("slide-holder");
var up     = document.getElementsById("button-up");
var down   = document.getElementsById("button-down");

let x = 0;

up.onclick = function() {
    x = x - 300
    holder.style.top = x + "px";
}        