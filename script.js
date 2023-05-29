//Declaring variable and constants
var firstNum;
var secondNum;
var operator;


//DOM selection and manipulation
const display = document.querySelector('.display')
const buttons = document.getElementsByClassName('btn')
var displayValue = ''
const operator = document.getElementsByClassName('.op')


operator.addEventListener('click', () => {
    operator
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        firstNum = buttons[i].innerHTML
        displayValue += buttons[i].innerHTML;
        display.textContent = displayValue
    })
}




//Function for mathematic operator
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 + num2
}   

//Function to carry out mathematic operation
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            add(firstNum, secondNum)                    
            break;
        case '-':
            subtract(firstNum, secondNum)
            break;
        case '*':
            multiply(firstNum, secondNum)
            break;
        case '/':
            divide(firstNum, secondNum)
            break;
    }
}
