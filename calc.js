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

//// Operators

let operator = ''

const [add, subtract, multiply, divide] = ['+','-','x','÷'];

// DOM Changes

const displayEquation = document.querySelector('.equation');

const updateDisplay = () => displayEquation.innerText = `${num1}${operator}${num2}`;


// Input buttons

const inputNumButtons = document.querySelectorAll('.number');

inputNumButtons.forEach(button => button.addEventListener('click',grabNumberValues))

// Input Function

function grabNumberValues() {

  num1
  ? num2 = this.value
  : num1 = this.value

  updateDisplay();

}

function grabOperatorValues() {

  num1
  ? num2 = this.value
  : num1 = this.value

  updateDisplay();

}



