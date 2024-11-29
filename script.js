const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");


let inputOne = [];
let inputTwo = [];
let numOne = 0;
let numTwo = 0;
let result = 0;
let isAddingToinputOne = true;
let resultShown = false;
let firstOperator = true;
let isNegative = false;
let operator = "";


const calculator = {
        add: function(numOne, numTwo){
        return numOne + numTwo;
    },

        subtract: function(numOne, numTwo){
        return numOne - numTwo;
    },

        multiply: function(numOne, numTwo){
        return numOne * numTwo;
    },

        divide: function(numOne, numTwo){
        return numOne / numTwo;
    }
}



function operate(numOne, numTwo, operator){
    if (operator === "+"){
        return calculator.add(numOne, numTwo);
    }

    if (operator === "-"){
        return calculator.subtract(numOne, numTwo);
    }

    if (operator === "/"){
        return calculator.divide(numOne, numTwo);
    }

    if (operator === "x"){
        return calculator.multiply(numOne, numTwo);
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", function () {
        let number = button.textContent;
        startNewCalculation(number);
        addToDisplay(number);
        addToArray(number);
        console.log(`result: ${result}`)
    });
});



operatorButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log(`operatorButtons`);
        isNextOperator();
        firstOperator = false;
        operator = button.textContent;

        addToDisplay(` ${operator} `);
        arrayToInteger(operator);
        console.log(numOne);
        console.log(numTwo);
        console.log(`result: ${result}`)
        console.log(`numOne: ${numOne}`);
        console.log(`numTwo: ${numTwo}`);
        
    });
});

function addToArray(number) {
    if (isAddingToinputOne === true){
        checkIfNegative(number);
        inputOne.push(parseInt(number, 10));
        console.log(`InputOne: ${inputOne}`);
        console.log(`numOne: ${numOne}`);

        }
        
    else {
            checkIfNegative(number);
            inputTwo.push(parseInt(number, 10));
            console.log(`InputTwo: ${inputTwo}`);
            console.log(`numTwo: ${numTwo}`);
    }
}


clearBtn.addEventListener("click", clearAll);

equalBtn.addEventListener("click", calculateResult);

function clearAll() {
    display.textContent = "";
    inputOne = [];
    inputTwo = [];
    numOne = 0;
    numTwo = 0;
    result = 0;
    isAddingToinputOne = true;
    resultShown = false;
    firstOperator = true;
    operator = "";
    console.log(`result: ${result}`)
    console.log(`clearAll`);
}


function arrayToInteger() {
    if (isAddingToinputOne === true) {
        numOne = inputOne.reduce((accum, element) => (accum * 10) + element, 0);
        isAddingToinputOne = false;
        console.log(`numOne: ${numOne}`);
    }
    else {
        numTwo = inputTwo.reduce((accum, element) => (accum * 10) + element, 0);
        console.log(`numOne: ${numOne}`);
    }
    
}

function addToDisplay(input) {
    display.textContent += input;

    if (resultShown === true){
        display.textContent = result;
    }
}

function calculateResult(){
    console.log(`calculateResult()`);
    console.log(`${inputOne} ${inputTwo}`);
    arrayToInteger();
    console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
    console.log(`operate`);
    result = operate(numOne, numTwo,operator);
    resultShown = true;
    addToDisplay();
    console.log(`result: ${result}`);
    isAddingToinputOne = true;
} 

function startNewCalculation(number) {
    if (resultShown === true) {
        display.textContent = "";
        inputOne = [];
        inputTwo = [];
        resultShown = false;
        firstOperator = true
        console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
        console.log(`result: ${result}`);
        console.log(`newInput`);
    }
}



function isNextOperator(){
    if (firstOperator === false && isNegative === false){
        console.log(`isNextOperator`);
        calculateResult();
        numOne = parseInt(result);
        numTwo = 0;
        inputOne = numberToArray(result);
        inputTwo = [];
        isAddingToinputOne = false;
        resultShown = false;
        console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
        console.log(`result: ${result}`);
    }
}



function numberToArray(number){
    return number.toString().split('').map(Number);
}

function checkIfNegative(number){
    if( operator === "-" && inputOne.length === 0 || operator === "-" && firstOperator === false){
        isNegative = true;
        makeNegative(number);
    }
    return number;
}

function makeNegative(number){
    isNegative = false;
    return number = operator + number;
}


