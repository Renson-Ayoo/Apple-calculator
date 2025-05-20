let display = document.getElementById("display");
let displayValue = "";
let operator = "";


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    if (b === 0) {
        return 'Error'
    }
    else {
        return a / b;
    }
}

function setOperator(op) {
    operator = op;
    appendToDisplay(operator);
}

function operate(operator, a, b) {
    switch (operator) {
         case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return devide(a, b);
        default:
            return 'Error: Op';
    }
}

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}


function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
}

function clearEntry() {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
}

function equals() {
    let parts = displayValue.split(operator);
    let firstNumber = parseFloat(parts[0]);
    let secondNumber = parseFloat(parts[1]);
    let result = operate(operator, firstNumber, secondNumber);
    display.value = result;
    displayValue = result.toString();
}