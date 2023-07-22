'use strict';

/*

* Calculator must add, subtract, multiply, divide
* Operations will be an operand, an operator, and then another operand.
*** Each item must be stored in separate variable (num1, opr, num2)
** Equation will show on display as string. Once equal is hit, a function will evaluate the express and choose the correct computation, based on the value of operator. For example if operator is 'x', calculator will know to multiply.

** All will have default value and when clear will be '' to make falsy. Num 2 will have check to make sure value is not falsy.

** Will create four separation functions for the equations

** All numbers will be rounded to avoid floats in first version of calculator.

** Calculator might have memory. Results will be story in an array. Up to five numbers. If length === 5, it will push in latest result and shift out the earliest one.

*** For design, calculator should have buttons for functions, equal, and clear.

* Create function that routes input. It will input first number and then check for value of operator variable to plug in 2nd number.

*/

// Calculator Display/Input Variables

let num1, num2, operator;

num1 = num2 = operator = '';

//// Operators

const CALCULATOR = {

  operators: {

    add: {symbol: "+", function(a,b) {return a + b}},
    subtract: {symbol: "-", function(a,b) {return a - b}},
    multiply: {symbol: "x", function(a,b) {return a * b}},
    divide: {symbol: "÷", function(a,b) {return a / b}},
    exponentiate: {symbol: "^", function(a,b) {return a ** b}},
  },

  displayEquation() {

    if (this.value.length <= 1) { // Catches number inputs

      operator
      ? num2 += this.value
      : num1 += this.value
      
    }
    else { // catches operators inputs
      operator = CALCULATOR.operators[this.value].symbol;
    }

    displayEquationDiv.innerText = `${num1} ${operator} ${num2}`

  },
  


  updateDisplay() {displayEquation.innerText = `${num1}${operator}${num2}`},
  updateResult(result) {displayResult.innerText = `${result}`},
  clearDisplay() {
    num1 = num2 = operator = this.result = ''; 
    displayEquationDiv.innerText = ``
  },
 
  operate(num1, operation, num2) {

    // operation = CALCULATOR.operators[]

    // let result = num1 num2

    // updateResult(result);

    // for (let operator in CALCULATOR.operators) {
    //   if 
    // }

    switch (operator) {

      // operator

      case '+': this.result = CALCULATOR.operators.add.function(parseInt(num1),parseInt(num2));
      displayResult.innerText = this.result;
      return this.result

      case '-': this.result = CALCULATOR.operators.subtract.function(parseInt(num1),parseInt(num2));
      ;
      displayResult.innerText = this.result;
      return this.result

      case 'x': this.result = CALCULATOR.operators.multiply.function(parseInt(num1),parseInt(num2));
      displayResult.innerText = this.result;
      return this.result;

      case '÷': this.result = CALCULATOR.operators.divide.function(parseInt(num1),parseInt(num2));;
      displayResult.innerText = this.result;
      return this.result

      case '^': this.result = CALCULATOR.operators.exponentiate.function(parseInt(num1),parseInt(num2));
      displayResult.innerText = this.result;
      return this.result

      default:
        alert('No bueno');
      
    }

    
  },
  Operator() {
    // if !num1 & !operator, num1 === this.value
    // if num1 && operator, num2 === this.value
    // 
  },

  result: 0

}

// Deconstructed variables for ease/readability

const { displayEquation, operate } = CALCULATOR;



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



