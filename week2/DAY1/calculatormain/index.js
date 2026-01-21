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
    if (b == 0) {
        alert('Cannot divide by zero')
    }
    return a / b;
}

function calculate(operator) {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const res1 = document.getElementById('result');


    if (isNaN(num1) || isNaN(num2)) {
        res1.innerText = "Invalid Inputs";
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
        default:
            result = "Invalid Operation";
    }
    res1.innerText = result;
}



