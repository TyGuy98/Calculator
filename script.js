const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");


const arrayOne = [];
const num2 = 0;
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
        arrayOne.push(parseInt(button.textContent, 10));
        console.log(arrayOne);
    });
});



operatorButtons.forEach(button => {
    button.addEventListener("click", function () {
        display.textContent += button.textContent;
        const numOne = arrayOne.reduce((accum, element) => (accum * 10) + element, 0);
        console.log(numOne);
    });
});


clearBtn.addEventListener("click", function () {
    display.textContent = "";
});

const digits = [1, 2, 3, 4, 5];
const int = digits.reduce((accum, digit) => (accum * 10) + digit, 0);

console.log(int);