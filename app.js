var num1 = 0;
var num2 = 0;
var result = 0;

function sum(){
    num1 = parseInt(prompt("Enter your first number:"));
    num2 = parseInt(prompt("Enter your second number:"));
    result = num1+num2;
    document.getElementById("demo").innerHTML = num1 + " + " + num2 + " = " + result;
}

function subtract(){
    num1 = parseInt(prompt("Enter your first number:"));
    num2 = parseInt(prompt("Enter your second number:"));
    result = num1 - num2;
    document.getElementById("demo").innerHTML = num1 + " - " + num2 + " = " + result;
}

function divide(){
    num1 = parseInt(prompt("Enter your first number:"));
    num2 = parseInt(prompt("Enter your second number:"));
    result = num1/num2;
    document.getElementById("demo").innerHTML = num1 + " / " + num2 + " = " + result;
}

function multiply(x,y){
    num1 = parseInt(prompt("Enter your first number:"));
    num2 = parseInt(prompt("Enter your second number:"));
    result = num1*num2;
    document.getElementById("demo").innerHTML = num1 + " x " + num2 + " = " + result;
}

function power(){
    num1 = parseInt(prompt("Enter your first number:"));
    num2 = parseInt(prompt("Enter your second number:"));
    result = Math.pow(num1,num2);
    document.getElementById("demo").innerHTML = num1 + " ^ " + num2 + " = " + result;
}

function squareRoot(){
    num1 = parseInt(prompt("Enter your first number:"));
    result = Math.sqrt(num1);
    document.getElementById("demo").innerHTML = "&#8730;" + num1 + " = " + result;
    
}

function allClear(){
    document.getElementById("demo").innerHTML = "Select a function to begin...";
}
