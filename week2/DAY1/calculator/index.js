let currentValue = "";
let firstNumber = "";
let operator = "";

function appendValue(value) {
    currentValue += value;
    document.getElementById("display").value = currentValue;
}


function setOperator(op) {
    if (currentValue === "") return;

    firstNumber = currentValue;
    operator = op;
    currentValue = "";
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero");
        return 0;
    }
    return a / b;
}


function calculate() {
    if (firstNumber === "" || currentValue === "") return;

    let num1 = Number(firstNumber);
    let num2 = Number(currentValue);
    let result = 0;

    if (operator === "+") result = add(num1, num2);
    else if (operator === "-") result = subtract(num1, num2);
    else if (operator === "*") result = multiply(num1, num2);
    else if (operator === "/") result = divide(num1, num2);

    document.getElementById("display").value = result;

    
    currentValue = result.toString();
    firstNumber = "";
    operator = "";
}


function clearDisplay() {
    currentValue = "";
    firstNumber = "";
    operator = "";
    document.getElementById("display").value = "";
}
