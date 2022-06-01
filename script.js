const calcButtons = document.querySelectorAll('button.calcItems');
const numButton = document.querySelectorAll('.numButton')
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const operationButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
const calcDisplay = document.querySelector('#display');
const topScreen = document.querySelector('#top');
const bottomScreen = document.querySelector('#bottom');
const decimalButton = document.querySelector('#decimal');

let num1 = '';
let num2 = '';
let op = '';

numButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (bottomScreen.textContent == '0' || bottomScreen.textContent == 'Error!') {
            bottomScreen.textContent = '';
        }
        if (!op) {
            bottomScreen.textContent += button.textContent;
            num1 = num1 + button.textContent;
            topScreen.textContent = num1;
        } else if (op) {
            if (!num2) {
                bottomScreen.textContent = '';
            }
            bottomScreen.textContent += button.textContent;
            num2 = num2 + button.textContent;
            topScreen.textContent += button.textContent;
        }
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 && !op) {
            topScreen.textContent = num1;
            op = button.id;
            topScreen.textContent += button.textContent;
        } else if (num2) {
            if (op == 'divide' && num2 == 0) {
                divideByZero();
            } else {
                let result = operate(op, Number(num1), Number(num2));
                bottomScreen.textContent = result;
                num1 = result;
                op = button.id;
                num2 = '';
                topScreen.textContent = '';
                topScreen.textContent = num1 + button.textContent;

            }

        }
    });
});

equalsButton.addEventListener('click', () => {
    if (num1 && num2 && op) {
        if (op == 'divide' && num2 == 0) {
            divideByZero();
        } else {
            let result = operate(op, Number(num1), Number(num2));
            bottomScreen.textContent = result;
            num1 = result;
            op = '';
            num2 = '';
        }

    }
})

decimalButton.addEventListener('click', () => {
    if (num1 && !num2 && num1.indexOf('.') == -1) {
        bottomScreen.textContent += '.';
        num1 += '.';
    } else if (op && num2 && num2.indexOf('.') == -1) {
        bottomScreen.textContent += '.';
        num2 += '.';
        topScreen.textContent += '.';
    }
})

clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
    bottomScreen.textContent = '0';
    topScreen.textContent = '';
    num1 = '';
    num2 = '';
    op = '';
}

function divideByZero() {
    clearCalculator();
    bottomScreen.textContent = 'Error!';
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