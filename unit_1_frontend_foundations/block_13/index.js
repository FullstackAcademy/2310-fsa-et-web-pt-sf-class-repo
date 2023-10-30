// Booleans

// true
// false

// 0 - 1

// "Truthy" "Falsy"

// Remember the 6 falsy values
0
''
NaN
false
undefined
null

console.log('-----------------------------\n');

// Everything else is truthy

// const doesUserLikeOranges = prompt('Do you like oranges?');
const doesUserLikeOranges = 'yes';

// if (
//     doesUserLikeOranges === 'yes'
//     || doesUserLikeOranges === 'bet'
//     || doesUserLikeOranges === 'yea'
//     || doesUserLikeOranges === 'ya'
// ) {
//     console.log('🍊');
// } else {
//     console.log('It prevents scurvy, you should like oranges you idiot.');
// }

// Varying inputs change the output you receive from a piece of code

// Functions
// A function is a reusable chunk of code that can take "arguments" that alter its behavior.
// DRY
// If you find yourself writing the same code twice, youre doing it wrong
// Write code once, make it work for lots of different situations

function checkIfCanDrinkAlcohol(birthYear) {
    if (birthYear > 2023) {
        throw new Error("You can't be born in the future.");
    } else if (2023 - birthYear >= 21) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkIfCanDrinkAlcohol(2025));
// console.log(checkIfCanDrinkAlcohol(2005));
// console.log(checkIfCanDrinkAlcohol(1999));
// console.log(checkIfCanDrinkAlcohol(1998));
// console.log(checkIfCanDrinkAlcohol(2012));
// console.log(checkIfCanDrinkAlcohol(1964));
// console.log(checkIfCanDrinkAlcohol(1776));
// console.log(checkIfCanDrinkAlcohol(2001));

function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

// console.log(addTwoNumbers(2, 2));
// console.log(addTwoNumbers(3, 7));

function randomNumber() {
    const randPercentage = Math.round(Math.random() * 100);

    return randPercentage;
}

console.log(randomNumber());

console.log('\n-----------------------------\n');
