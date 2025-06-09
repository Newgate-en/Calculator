let newLine = true; // Variable to track if a new line is being started
let value1;
let currentOperator;

// Function for when the digit buttons are pressed
function digitBtnPressed(button) {
    if (newLine == true) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

// Function for when the AC button presses
function btnACPressed() {
    document.getElementById("inputBox").value = "0";
    newLine = true;
}

// Function for when the operator buttons are pressed
function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

// Function for when the equals button is pressed
function equalsBtnPressed() {
   let value2 = parseInt(document.getElementById("inputBox").value);
   let result;
   
    switch (currentOperator) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        default:
            result = "Error";
    }
    document.getElementById("inputBox").value = result;

    newLine = true;
    value1 = 0; // Reset value1 for the next calculation
}