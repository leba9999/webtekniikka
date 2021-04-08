'use strict'

const button = document.getElementById("cal");
const input = document.getElementById("num1");
const answer = document.getElementById("vastaus");

button.addEventListener("click", calculate);

function calculate(evt){
    let inputs = input.value.split("");
    let nums = [""];
    let operators = [];
    for (let i = 0; i < input.value.length; i++){
        console.log(inputs[i]);
        switch (inputs[i]){
            case "":
                nums.push("");
                break;
            case "-":
                nums.push("");
                operators.push("sub");
                break;
            case "+":
                nums.push("");
                operators.push("sum");
                break;
            case "/":
                nums.push("");
                operators.push("div");
                break;
            case "*":
                nums.push("");
                operators.push("multi");
                break;
            default:
                nums[nums.length-1] += inputs[i];
                break;
        }
    }
    let output = 0;
    for (let i = 0; i < operators.length; i++){
        switch (operators[i]){
            case "sum":
                output = (parseFloat(nums[0]) + parseFloat(nums[1]));
                break;
            case "sub":
                output = (parseFloat(nums[0]) - parseFloat(nums[1]));
                break;
            case "div":
                output = (parseFloat(nums[0]) / parseFloat(nums[1]));
                break;
            case "multi":
                output = (parseFloat(nums[0]) * parseFloat(nums[1]));
                break;
        }
    }
    answer.innerText = output.toString();
}