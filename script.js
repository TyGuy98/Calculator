const num1 = 0;
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


console.log(operate(5, "*", 5));