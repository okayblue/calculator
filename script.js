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
        if (displayBottom.textContent == '0' || displayBottom.textContent == 'Error!') {
            displayBottom.textContent = '';
        }
        if (!op) {
            displayBottom.textContent += button.textContent;
            num1 = num1 + button.textContent;
        } else if (op) {
            if (!num2) {
                displayBottom.textContent = '';
            }
            displayBottom.textContent += button.textContent;
            num2 = num2 + button.textContent;
        }
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 && !op) {
            op = button.id;
        } else if (num2) {
            if (num2 == 0) {
                divideByZero();
            } else {
                let result = operate(op, Number(num1), Number(num2));
                displayBottom.textContent = result;
                num1 = result;
                op = button.id;
                num2 = '';
            }

        }
    });
});

equalsButton.addEventListener('click', () => {
    if (num1 && num2 && op) {
        if (num2 == 0) {
            divideByZero();
        } else {
            let result = operate(op, Number(num1), Number(num2));
            displayBottom.textContent = result;
            num1 = result;
            op = '';
            num2 = '';
        }

    }
})

clearButton.addEventListener('click', () => {
    clearCalculator();
})

function clearCalculator() {
    displayBottom.textContent = '';
    displayTop.textContent = '';
    num1 = '';
    num2 = '';
    op = '';
}

function divideByZero() {
    clearCalculator();
    displayBottom.textContent = 'Error!';

}

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
    return Number(result.toFixed(3));
}