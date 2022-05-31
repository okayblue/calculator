const calcButtons = document.querySelectorAll('button.calcItems');
const numButton = document.querySelectorAll('.numButton')
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const operationButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
const calcDisplay = document.querySelector('#display');
const displayTop = document.querySelector('#top');
const displayBottom = document.querySelector('#bottom');

let num1 = '';
let num2 = '';
let op = '';

numButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayBottom.textContent == '0') {
            displayBottom.textContent = '';
        } 
        if (!op) {
            displayBottom.textContent += button.textContent;
            num1 = num1 + button.textContent;
            console.log(num1)
        } else if (op) {
            if(!num2) {
                displayBottom.textContent = '';
            }
            displayBottom.textContent += button.textContent;
            num2 = num2 + button.textContent;
            console.log(num2)
        }
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 && !op) {
            op = button.textContent;
            console.log(op);
        }
    });
});

clearButton.addEventListener('click', () => {
    displayBottom.textContent = '';
    displayTop.textContent = '';
    num1 = '';
    num2 = '';
    op = '';
    
})


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
    }
    return result;
}