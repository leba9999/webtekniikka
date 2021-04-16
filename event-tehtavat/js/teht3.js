'use strict'

const button = document.querySelectorAll("button");
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const answer = document.getElementById("vastaus");

for (let i = 0; i < button.length; i++)
    button[i].addEventListener("click", calculate);

function calculate(evt){
    
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    let output = 0;
    console.log(evt.target.id);
    if (evt.target.id== "sum"){
        output = (num1 + num2);
    }
    else if (evt.target.id == "sub"){
        output = num1 - num2;
    }
    else if (evt.target.id == "multi"){
        output = (num1 * num2);
    }
    else if (evt.target.id == "div"){
        if (num2 == 0){
            console.error(`Cannot divide with zero!`);
            alert(`0 ei voi jakaa`);
        }
        else {
            output = (num1 / num2);
        }
    }
    else {
        alert(`Jokin meni nyt pahasti pieleen! Kyseistä toimintoa ei ole`);
    }
    answer.innerText = output.toString();
}