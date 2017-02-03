// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
    allClear();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
    allClear();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    allClear();
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test ("Change Sign Test", function (assert) {
    addDigit('1');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1");
    allClear();
});
//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test ("Percentage Test", function (assert) {
    addDigit('1');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.01", "Passed - Expected 0.01");
    allClear();
});

//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test ("Inverse Test", function (assert) {
    addDigit('2');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
    allClear();
});
//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test ("Factorial Test", function (assert) {
    addDigit('3');
    factorial();
    assert.equal(document.getElementById("screen").value, "6", "Passed - Expected 6");
    allClear();
});
//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test ("Square Root Test", function (assert) {
    addDigit('4');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
    allClear();
});
//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test ("Square Test", function (assert) {
    addDigit('3');
    square();
    assert.equal(document.getElementById("screen").value, "9", "Passed - Expected 9");
    allClear();
});
//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test ("Clear Test", function (assert) {
    addDigit('3');
    Clear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    allClear();
});
//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test ("Divide By Zero Test", function (assert) {
    addDigit('2');
    storeOperator('/');
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "ERROR: Divide by 0!", "Passed - Expected ERROR: Divide by 0!");
    allClear();
});
//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test ("Overflow Test", function (assert) {
    addDigit('22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
    assert.equal(document.getElementById("screen").value, "22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222", "Passed - Expected 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222");
    allClear();
});
