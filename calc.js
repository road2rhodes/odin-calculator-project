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

const calculator = {
  operators: {
    
    add: {symbol: "+", function(a,b) {return a + b}},
    subtract: {symbol: "-", function(a,b) {return a - b}},
    multiply: {symbol: "x", function(a,b) {return a * b}},
    divide: {symbol: "÷", function(a,b) {return a / b}},
    exponentiate: {symbol: "^", function(a,b) {return a ** b}},
  },


  updateDisplay() {displayEquation.innerText = `${num1}${operator}${num2}`},
  calcuate() {

    let result = 0;

    switch (operator) {

      case '+': this.result = calculator.operators.add.function(parseInt(num1),parseInt(num2));
      break;

      case '-': this.result = calculator.operators.subtract.function(parseInt(num1),parseInt(num2));
      break;

      case 'x': this.result = calculator.operators.multiply.function(parseInt(num1),parseInt(num2));
      break;

      case '÷': this.result = calculator.operators.divide.function(parseInt(num1),parseInt(num2));;
      break;

      case '^': this.result = calculator.operators.exponentiate.function(parseInt(num1),parseInt(num2));
      break;
      
    }
  },

  result: 0,

}

const { updateDisplay } = calculator;

let num1 = '';
let num2 = '';

//// Operators

let operator = ''

const [add, subtract, multiply, divide, exponentiation] = ['+','-','x','÷'];

// DOM Changes

const displayEquation = document.querySelector('.equation');


// Input buttons

const inputNumButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operators');

inputNumButtons.forEach(button => button.addEventListener('click',grabNumberValues))

operatorButtons.forEach(button => button.addEventListener('click',grabOperatorValues))

// Input Function

function grabNumberValues() {

  operator === ''
  ? num1 += this.value
  : num2 += this.value

  updateDisplay();

}

function grabOperatorValues() {

  switch (this.value) {
    case 'add': operator = calculator.operators.add.symbol;
    break;

    case 'subtract': operator = calculator.operators.subtract.symbol;
    break;

    case 'multiply': operator = calculator.operators.multiply.symbol
    break;

    case 'divide': operator = calculator.operators.divide.symbol;
    break;

    case 'exponentiate': operator = calculator.operators.exponentiate.symbol;
    break;

    default:
      operator = '';

  }

  updateDisplay()

}



