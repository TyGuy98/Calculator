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
let isInputTwoNegative = false;
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
        const currentOperator = button.textContent;

        if (firstOperator && handleNegativeInputOne(currentOperator)){
            return;
        }
        if (handleNegativeInputTwo(currentOperator)){
            return;
        }

        transitionToNewOperator();
        console.log(`operatorButtons`);
        firstOperator = false;
        operator = button.textContent;
        

        
        
        addToDisplay(` ${operator} `);
        console.log(numOne);
        console.log(numTwo);
        console.log(`result: ${result}`)
        console.log(`numOne: ${numOne}`);
        console.log(`numTwo: ${numTwo}`);
        
    });
});

function addToArray(number) {
    if (isAddingToinputOne) {
        if(inputOne.length === 0 && display.textContent.trim().startsWith("-")) {
            number = `-${number}`;
        }
        inputOne.push(number);
        console.log(`InputOne: ${inputOne}`);
        console.log(`numOne: ${numOne}`);

     } else {
        if (isInputTwoNegative) {
            number = `-${number}`; 
            isInputTwoNegative = false; 
        }
        inputTwo.push(number);
        console.log(`InputTwo: ${inputTwo}`);
     }
}

function arrayToInteger() {
    if (isAddingToinputOne === true) {
        numOne = parseInt(inputOne.join(''), 10);
        isAddingToinputOne = false;
        console.log(`numOne: ${numOne}`);
    }
    else {
        numTwo = parseInt(inputTwo.join(''), 10);
        console.log(`numOne: ${numOne}`);
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


function addToDisplay(input) {
    if (isInputTwoNegative === true){
        return;
    }
    display.textContent += input;
    console.log("display");
    if (resultShown === true){
        display.textContent = result;
    }
}

function calculateResult(){
    console.log(`calculateResult()`);
    console.log(`${inputOne} ${inputTwo}`);
    arrayToInteger();

    if (operator && !isNaN(numOne) && !isNaN(numTwo)) {
        result = operate(numOne, numTwo, operator);
        resultShown = true;
        display.textContent = result;
        console.log(`result: ${result}`);
    } else {
        console.error(`Invalid inputs: numOne=${numOne}, numTwo=${numTwo}, operator=${operator}`);
        result = undefined; 
    }

    console.log(`result: ${result}`);
    isAddingToinputOne = true;
} 

function transitionToNewOperator(){
    if(!firstOperator && inputTwo.length > 0) {
        calculateResult(); 
        numOne = result; 
        inputOne = numberToArray(numOne); 
        inputTwo = []; 
    }
}

function startNewCalculation(number) {
    if (resultShown === true) {
        display.textContent = "";
        inputOne = [];
        inputTwo = [];
        resultShown = false;
        firstOperator = true;
        console.log(`numOne: ${numOne}, numTwo: ${numTwo}`);
        console.log(`result: ${result}`);
        console.log(`newInput`);
    }
}


function numberToArray(number){
    return number.toString().split('').map(Number);
}



function makeNegative(number){
    return number = operator + number;
}


function handleNegativeInputOne(currentOperator){
    if (currentOperator === "-" && inputOne.length === 0 && firstOperator) {
        isAddingToinputOne = true;
        addToDisplay(`-`);
        console.log(`Negative sign added for inputOne`);
        return true; 
    }
    return false;
}


function handleNegativeInputTwo(currentOperator){
    if (currentOperator === "-" && !firstOperator && inputTwo.length === 0) {
        isInputTwoNegative = true;
        addToDisplay(`-`);
        console.log(`Negative sign added for inputTwo`);
        return true; 
    }
    return false;
}