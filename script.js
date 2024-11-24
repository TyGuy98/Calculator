const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");


let inputOne = [];
let inputTwo = [];
let numOne = 0;
let numTwo = 0;
let isAddingToinputOne = true;
let resultShown = false;
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
    });
});



operatorButtons.forEach(button => {
    button.addEventListener("click", function () {
        operator = button.textContent;
        addToDisplay(operator);
        arrayToInteger();
        console.log(numOne);
    });
});

function addToArray(number) {
        if (isAddingToinputOne === true){
            inputOne.push(parseInt(number, 10));
            console.log(`arrayOne: ${inputOne}`);
        }
        
        else {
            inputTwo.push(parseInt(number, 10));
            console.log(`arrayTwo: ${inputTwo}`);
        }
}


clearBtn.addEventListener("click", clearAll);

function clearAll() {
    display.textContent = "";
    operator = "";
    inputOne = [];
    inputTwo = [];
    numOne = 0;
    numTwo = 0;
    isAddingToinputOne = true;
    resultShown === false;
}




equalBtn.addEventListener("click", function () {
    arrayToInteger();
    display.textContent = operate(numOne, numTwo,operator);
    resultShown = true;
    isAddingToinputOne = true;
    console.log(`array 1: ${inputOne}`);
    console.log(`array 2: ${inputTwo}`);
});


function arrayToInteger() {
    if (isAddingToinputOne === true) {
        numOne = inputOne.reduce((accum, element) => (accum * 10) + element, 0);
        isAddingToinputOne = false;
    }
    
    else {
        numTwo = inputTwo.reduce((accum, element) => (accum * 10) + element, 0);
    }
    
}

function addToDisplay(input) {
    display.textContent += input;
}

function newInput(number) {
    if (resultShown === true) {
        display.textContent = "";
        inputOne = [];
        inputTwo = [];
        resultShown = false;
        console.log(`array 1: ${inputOne}`);
        console.log(`array 2: ${inputTwo}`);
    }
}