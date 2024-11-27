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
        newInput();
        let number = button.textContent;
        addToDisplay(number);
        addToArray(number);
        console.log(`result: ${result}`)
    });
});



operatorButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log(`operatorButtons`);
        isNextOperator();
        operator = button.textContent;
        addToDisplay(` ${operator} `);
        arrayToInteger();
        firstOperator = false;
        console.log(numOne);
        console.log(numTwo);
        console.log(`result: ${result}`)
        console.log(`numOne: ${numOne}`);
        console.log(`numTwo: ${numTwo}`);
        
    });
});

function addToArray(number) {
        if (isAddingToinputOne === true){
            inputOne.push(parseInt(number, 10));
            console.log(`InputOne: ${inputOne}`);
            console.log(`numOne: ${numOne}`);
        }
        
        else {
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
    isAddingToinputOne = true;
    resultShown = false;
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
    console.log(`result: ${result}`);
    console.log(`addToDisplay`);
}

function calculateResult(){
    console.log(`${inputOne} ${inputTwo}`);
    arrayToInteger();
    console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
    console.log(`operate`);
    result = operate(numOne, numTwo,operator);
    console.log(`result: ${result}`);
    display.textContent = result;
    isAddingToinputOne = true;
    resultShown = true;
    
    console.log(`calculateResult()`);
    return result;
} 

function newInput(number) {
    if (resultShown === true) {
        clearAll();
        console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
        console.log(`result: ${result}`);
        console.log(`newInput`);
    }
}



function isNextOperator (){
    if (firstOperator === false){
        console.log(`isNextOperator`);
        display.textContent = (`${calculateResult()} `);
        numOne = parseInt(result);
        numTwo = 0;
        inputOne = result.toString().split('').map(Number);
        inputTwo = [];
        isAddingToinputOne = false;
        resultShown = false;
        console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
        console.log(`result: ${result}`);
    }
}


