function addTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

const result = addTwoNumbers(7, 3);

console.log(result);

const addTwoNumbersArrow = (numOne, numTwo) => {
    return numOne + numTwo;
}

// Implicit Returns
// Will return whatever is after the arrow if a curly brace is not there.
/*
const addTwoNumbersArrow = (numOne, numTwo) => return numOne + numTwo;
 */

const resultArrow = addTwoNumbersArrow(50, 49);

console.log(resultArrow);

const sayHelloToName = name => `Hello ${name}!`;

console.log(sayHelloToName('Clayton'));
