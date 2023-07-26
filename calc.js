'use strict';

// Calculator Display/Input Variables

let num1, num2, operator, result;

num1 = num2 = operator = result = '';

//// Operators

const CALCULATOR = {

  operators: {

    add: {symbol: "+", function(a,b) {return parseInt(a) + parseInt(b)}},
    subtract: {symbol: "-", function(a,b) {return parseInt(a) - parseInt(b)}},
    multiply: {symbol: "x", function(a,b) {return parseInt(a) * parseInt(b)}},
    divide: {symbol: "÷", function(a,b) {return parseInt(a) / parseInt(b)}},
    exponentiate: {symbol: "^", function(a,b) {return parseInt(a) ** parseInt(b)}},
  },
  


  updateDisplay() {displayEquation.innerText = `${num1}${operator}${num2}`},
  updateResult(result) {displayResult.innerText = `${result}`},
  clearDisplay() {
    num1 = num2 = operator =  ''; 
    displayEquationDiv.innerText = '';
    displayResultDiv.innerText = '';
  },
 
  operate() {

    let calcOperation;

    if (!num1 || !num2 || !operator) return alert('No equation found');

    for (let op in CALCULATOR.operators) {

      if (operator === CALCULATOR.operators[op].symbol) 

      calcOperation = CALCULATOR.operators[op].function;

    }

    result = calcOperation(num1, num2);

    displayResultDiv.innerText = result;

    return result;
    
  }, 
  displayEquation() {

    if (this.value.length <= 1) { // Catches number inputs

      operator
      ? num2 += this.value
      : num1 += this.value
      
    }
    else { // catches operators inputs

      if (!num1) return alert('Enter a starting value first')

      if (operator && num2) {
        num1 = CALCULATOR.operate(num1, num2);
        operator = CALCULATOR.operators[this.value].symbol
        num2 = '';
        CALCULATOR.updateDisplay();
      }

      operator = CALCULATOR.operators[this.value].symbol;

    }

    return displayEquationDiv.innerText = `${num1} ${operator} ${num2}`

  },

}

// Deconstructed variables for ease/readability

const { displayEquation } = CALCULATOR;



const [add, subtract, multiply, divide, exponentiation] = ['+','-','x','÷'];

// DOM Changes

const displayEquationDiv = document.querySelector('.equation');
const displayResultDiv = document.querySelector('.result');


// Input buttons

const inputNumButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operators');

inputNumButtons.forEach(button => {
  button.addEventListener('click',displayEquation);
  // button.addEventListener('keydown', (event) => if (event.key ===)
})

operatorButtons.forEach(button => button.addEventListener('click',displayEquation))

const equalSignButton = document.getElementById('equals')
      equalSignButton.addEventListener('click', CALCULATOR.operate)

const acButton = document.querySelector('.input-clear');
      acButton.addEventListener('click',CALCULATOR.clearDisplay)

// Allows number input via keys


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    CALCULATOR.clearDisplay();
  } else if (event.key === 'Enter') {
    CALCULATOR.operate();
  } else {
    let operatorValue;
  
    switch (event.key) {
      case '+':
        operatorValue = 'add';
        break;
      case '-':
        operatorValue = 'subtract';
        break;
      case '*':
        operatorValue = 'multiply';
        break;
      case '/':
        operatorValue = 'divide';
        break;
      case '^':
        operatorValue = 'exponentiate';
        break;
      default:
        if (event.key >= '0' && event.key <= '9') {
          const numberButton = document.querySelector(`[value="${event.key}"]`);
          if (numberButton) {
            displayEquation.call(numberButton);
          }
        }
        return;
    }
  
    const operatorButton = document.querySelector(`[value="${operatorValue}"]`);
    if (operatorButton) {
      displayEquation.call(operatorButton);
    }
  }
});
  

// Input Function


function grabNumberValues() {

  operator === ''
  ? num1 += this.value
  : num1 === '' ? num1 += this.value : num2 += this.value;

  if (num1 && operator && num2) {
    num3 = CALCULATOR.operate();
    num1 = num3;
    num2 = '';
}
  

  updateDisplay();

}

function grabOperatorValues() {

  if (num1 === '') {
    alert('Please enter a starting number for equation.');
    operator = '';
  }
  else {
  operator = CALCULATOR.operators[this.value].symbol;
  updateDisplay();}

}



