/* TODO: 1. Add these new functions: percentage, inverse, factorial, square and square root
2. Bootstrap it to make it pretty! 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
4. Fix divide by 0 errors! 5. Add the ability to clear the current input, but not memory.
6. Challenge: Add trig functions (in radian AND degree mode) 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
8. Super Challenge: Add ( and ) buttons that work! 9. Super Duper Challenge: Add exponents (negatives too!)
*/
var currentInput = "0";
var memory = "0";
var operator = 0;
var sto = "0";
var pi = 3.14159265359;
var angMode = 0;
// Helper function for displaying the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
/**
 *  Adds a digit to the current input
 */
function addDigit(dig) {
    if (currentInput.length < 16) {
        if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
            currentInput = dig;
        }
        else {
            currentInput = currentInput + dig;
        }
    }
    displayCurrentInput();
}
/**
 *  Adds a decimal to the current input
 */
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
/**
 *  Clears everything.
 */
function allClear() {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 *  Stores the last operator pushed for multiply, divide, add, or subtract.
 *
 */
function storeOperator(op) {
    if (op.indexOf("") > -1) {
        operator = 1;
    }; //codes for
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    if (op.indexOf("^") > -1) {
        operator = 5;
    }; // exponent
    memory = currentInput; //store value
    currentInput = "0";
    displayCurrentInput();
}
/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    if (operator == 5) {
        currentInput = Math.pow((eval(memory)), (eval(currentInput)));
    }
    operator = 0; //clear operator
    memory = "0"; //clear memory
    zeroErr();
    displayCurrentInput();
}
/**
 *  Change the sign of the current input
 */
function changeSign() {
    currentInput = currentInput * -1;
    displayCurrentInput();
}
/**
 * // Clear the current input back to 0
 */
function Clear() {
    currentInput = "0";
    displayCurrentInput();
}
/**
 *  Change the current input to a percentage
 */
function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}
/**
 * Calculate the factorial of the current input
 */
function factorial() {
    var res = currentInput;
    if (currentInput == 0) {
        res = 1
    }
    else if (currentInput > 0) {
        for (i = currentInput - 1; i > 0; i--) {
            res = res * i;
        }
    }
    else if (currentInput < 0) {
        res = "ERROR";
    }
    currentInput = res;
    displayCurrentInput();
}
/**
 *  Calculate the square of the current input
 */
function square() {
    var x = currentInput;
    currentInput = Math.pow(x, 2);
    displayCurrentInput();
}
/**
 *  Calculate the square root of the current input
 */
function squareRoot() {
    currentInput = Math.pow(currentInput, 1 / 2);
    displayCurrentInput();
}
/**
 * Calculate the inverse of the current input
 */
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}
/**
 * If divide by zero, provides an error
 */
function zeroErr() {
    if (currentInput == Infinity) {
        currentInput = "ERROR: Divide by 0!";
        displayCurrentInput();
    }
}
/**
 * Stores a number in the given input
 */
function memoryStore() {
    sto = currentInput;
    Clear();
    displayCurrentInput();
}
/**
 * Recalls the memoryStore function into the dosplay
 */
function memoryRecall() {
    currentInput = sto;
    displayCurrentInput();
}
/**
 * Adds the memory store value to a given input
 */
function memoryAdd() {
    currentInput = eval(sto) + eval(currentInput);
    memoryStore();
    displayCurrentInput();
}
/**
 * Subtracts the memory store value to a given input
 */
function memorySub() {
    currentInput = eval(sto) - eval(currentInput);
    memoryStore();
    displayCurrentInput();
}
/**
 * Inputs pi as the current displayed value
 */
function setPi() {
    currentInput = pi;
    displayCurrentInput()
}
/**
 * Sets the polar angle calcuations to be expressed in angles wather than radians
 */
function angleMode() {
    if (angMode == 0) {
        angMode = 1;
    }
    else {
        angMode = 0;
    }
}
/**
 * Calculates the Sine value of a given input
 */
function sine() {
    if (angMode == 1) {
        var num = currentInput * (pi / 180);
        currentInput = Math.sin(num);
    }
    else {
        currentInput = Math.sin(currentInput);
    }
    displayCurrentInput();
    checkZero();
}
/**
 * Calculates the cosine value of a given input
 */
function cosine() {
    if (angMode == 1) {
        var num = currentInput * (pi / 180);
        currentInput = Math.cos(num);
    }
    else {
        currentInput = Math.cos(currentInput);
    }
    displayCurrentInput();
    checkZero();
}
/**
 * Calculates the tangent of a given input
 */
function tangent() {
    if (angMode == 1) {
        var num = currentInput * (pi / 180);
        currentInput = Math.tan(num);
    }
    else {
        currentInput = Math.tan(currentInput);
    }
    displayCurrentInput();
    checkZero();
}
/**
 * Limits the displayed value to 10 places
 */
function checkZero() {
    if (currentInput < Math.pow(10, -10) & currentInput > (0)) {
        currentInput = 0;
    }
    else if (currentInput > (Math.pow(10, -10) * -1) && currentInput < 0) {
        currentInput = 0
    }
    displayCurrentInput();
}
