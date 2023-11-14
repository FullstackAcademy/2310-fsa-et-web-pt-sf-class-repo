// function addTwoNumbers(a, b) {
//
// }

// I want you to add 3 + 7 and log it out
// console.log(3 + 7);

// I want you to add 6 + 7 and log it out
// I want you to add 1 + 7 and log it out
// I want you to add 2 + 7 and log it out
// I want you to add 3 + 7 and log it out
// I want you to add 0 + 7 and log it out
// I want you to add 1 + 5 and log it out
// I want you to add 4 + 6 and log it out
// I want you to add 4 + 5 and log it out
// console.log(3 + 7);
// console.log(3 + 7);
// console.log(3 + 7);
// console.log(3 + 7);

// Functions are intended to avoid this problem - we write code that works ONCE - but can be given different inputs to produce differing outputs by a consistent ruleset.

const checkIfStringOrNumber = (aValue) => {
    return typeof aValue === 'string' || typeof aValue === 'number';
}

// DRY - DONT REPEAT YOURSELF
function addTwoNumbers(a, b) {
    if (checkIfStringOrNumber(a) && checkIfStringOrNumber(b)) {
        let realA = typeof a === 'string' ? parseInt(a) : a;
        let realB = typeof b === 'string' ? parseInt(b) : b;

        return realA + realB;
    } else {
        throw new Error(`Invalid arguments supplied. Arguments may only be strings or numbers.`);
    }
}

console.log(addTwoNumbers(2, 2));

// Hey, we have a client sending us strings instead of numbers, can you still add them?

console.log(addTwoNumbers('2', '2'));

// A client just sent us an array as an argument

console.log(addTwoNumbers('2', ['elephant']));
