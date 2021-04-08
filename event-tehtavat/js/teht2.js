'use strict';

const paragraph = document.querySelector("p");
const photo = document.getElementById("kuva");

photo.addEventListener("mouseenter", show);
photo.addEventListener("mouseleave", show);
paragraph.className = "hidden";

function show(evt){
    if (evt.type == "mouseenter"){
        paragraph.className = "visible";
    }
    else if (evt.type == "mouseleave"){
        paragraph.className = "hidden";
    }
    console.log(paragraph.className);
}