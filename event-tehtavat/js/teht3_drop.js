'use strict'

const button = document.getElementById("cal");
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const answer = document.getElementById("vastaus");

button.addEventListener("click", calculate);

function calculate(evt){
    const option = document.getElementById("operators");
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    let output = 0;
    console.log(evt.target.id);
    if (option.value == "sum"){
        output = (num1 + num2);
    }
    else if (option.value == "sub"){
        output = num1 - num2;
    }
    else if (option.value == "multi"){
        output = (num1 * num2);
    }
    else if (option.value == "div"){
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