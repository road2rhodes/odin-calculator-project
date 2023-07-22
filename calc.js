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

let num1 = '';
let num2 = '';
let num3 = ''; // only exists as reference for chained operators

//// Operators

let operator = ''

const CALCULATOR = {

  operators: {

    add: {symbol: "+", function(a,b) {return a + b}},
    subtract: {symbol: "-", function(a,b) {return a - b}},
    multiply: {symbol: "x", function(a,b) {return a * b}},
    divide: {symbol: "÷", function(a,b) {return a / b}},
    exponentiate: {symbol: "^", function(a,b) {return a ** b}},
  },

  displayEquation(equation) {

    num1 = operator = num2 = '';

    if (!num1) {
      return alert('Please enter a starting number for equation.');
    }
    else {
    operator = calculator.operators[this.value].symbol;
    updateDisplay();}
  

    operator
    ? num2 += this.value
    : num1 += this.value


    equation = `${num1} ${operator} ${num2}`

    displayEquationDiv.innerText = equation;
  },
  


  updateDisplay() {displayEquation.innerText = `${num1}${operator}${num2}`},
  updateResult(result) {displayResult.innerText = `${result}`},
  clearDisplay() {
    num1 = num2 = operator = this.result = ''; calculator.updateDisplay();
    calculator.updateResult();
  },
 
  operate(num1, operation, num2) {

    // operation = calculator.operators[]

    // let result = num1 num2

    // updateResult(result);

    // for (let operator in calculator.operators) {
    //   if 
    // }

    switch (operator) {

      // operator

      case '+': this.result = calculator.operators.add.function(parseInt(num1),parseInt(num2));
      displayResult.innerText = this.result;
      return this.result

      case '-': this.result = calculator.operators.subtract.function(parseInt(num1),parseInt(num2));
      ;
      displayResult.innerText = this.result;
      return this.result

      case 'x': this.result = calculator.operators.multiply.function(parseInt(num1),parseInt(num2));
      displayResult.innerText = this.result;
      return this.result;

      case '÷': this.result = calculator.operators.divide.function(parseInt(num1),parseInt(num2));;
      displayResult.innerText = this.result;
      return this.result

      case '^': this.result = calculator.operators.exponentiate.function(parseInt(num1),parseInt(num2));
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

const { updateDisplay, operate } = calculator;



const [add, subtract, multiply, divide, exponentiation] = ['+','-','x','÷'];

// DOM Changes

const displayEquationDiv = document.querySelector('.equation');
const displayResultDiv = document.querySelector('.result');


// Input buttons

const inputNumButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operators');

inputNumButtons.forEach(button => button.addEventListener('click',grabNumberValues))

operatorButtons.forEach(button => button.addEventListener('click',CALCULATOR.displayEquation))

const equalSignButton = document.getElementById('equals')
      equalSignButton.addEventListener('click', calculator.operate)

const acButton = document.querySelector('.input-clear');
      acButton.addEventListener('click',calculator.clearDisplay)

// Input Function


function grabNumberValues() {

  operator === ''
  ? num1 += this.value
  : num1 === '' ? num1 += this.value : num2 += this.value;

  if (num1 && operator && num2) {
    num3 = calculator.operate();
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
  operator = calculator.operators[this.value].symbol;
  updateDisplay();}

}



