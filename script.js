const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");


let arrayOne = [];
let arrayTwo = [];
let isAddingToArrayOne = true;
const operator = "";



function addNumbers (num1, num2){
    return num1 + num2;
}

function subtractNumbers (num1, num2){
    return num1 - num2;
}

function divideNumbers (num1, num2){
    return num1 / num2;
}

function multiplyNumbers (num1, num2){
    return num1 * num2;
}

function operate (num1, operator, num2){
    if (operator === "+"){
        return addNumbers(num1, num2);
    }

    if (operator === "-"){
        return subtractNumbersNumbers(num1, num2);
    }

    if (operator === "/"){
        return divideNumbersNumbers(num1, num2);
    }

    if (operator === "*"){
        return multiplyNumbers(num1, num2);
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
        const numOne = arrayOne.reduce((accum, element) => (accum * 10) + element, 0);
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
});

