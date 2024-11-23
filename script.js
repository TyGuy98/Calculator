const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");


let arrayOne = [];
let arrayTwo = [];
let numOne = 0;
let numTwo = 0;
let isAddingToArrayOne = true;
let operator = "";



function addNumbers (numOne, numTwo){
    return numOne + numTwo;
}

function subtractNumbers (numOne, numTwo){
    return numOne - numTwo;
}

function divideNumbers (numOne, numTwo){
    return numOne / numTwo;
}

function multiplyNumbers (numOne, numTwo){
    return numOne * numTwo;
}

function operate (numOne, numTwo, operator){
    if (operator === "+"){
        return addNumbers(numOne, numTwo);
    }

    if (operator === "-"){
        return subtractNumbers(numOne, numTwo);
    }

    if (operator === "/"){
        return divideNumbers(numOne, numTwo);
    }

    if (operator === "x"){
        return multiplyNumbers(numOne, numTwo);
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", function () {
        display.textContent += button.textContent;
        addToArray(button.textContent);
    });
});



operatorButtons.forEach(button => {
    button.addEventListener("click", function () {
        display.textContent += button.textContent;
        operator = button.textContent;
        numOne = arrayOne.reduce((accum, element) => (accum * 10) + element, 0);
        isAddingToArrayOne = false;
        console.log(numOne);
    });
});

function addToArray (number) {
        if (isAddingToArrayOne === true){
            arrayOne.push(parseInt(number, 10));
            console.log(arrayOne);
        }
        
        else {
            arrayTwo.push(parseInt(number, 10));
            console.log(arrayTwo);
        }
}


clearBtn.addEventListener("click", function () {
    display.textContent = "";
    arrayOne = [];
    arrayTwo = [];
    numOne = 0;
    numTwo = 0;
    isAddingToArrayOne = true;
    operator = "";
});


equalBtn.addEventListener("click", function () {
    numTwo = arrayTwo.reduce((accum, element) => (accum * 10) + element, 0);
    display.textContent = operate(numOne, numTwo,operator);
});
