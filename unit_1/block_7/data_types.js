// Static Types and Dynamic Types

// The JS Types
// Booleans
// Numbers
// Strings
// Objects (more on this later, this is a huge category)
// undefined
// null

// Boolean
// Absence of, or presence of.
// True or False
// 1 or 0

const aBoolean = true;
const aBoolean2 = false;

const eliotIsTheBestTeacher = true;
const eliot_is_the_best_teacher = true;

// Numbers
// console.log('The max number in JS: ', Number.MAX_SAFE_INTEGER);

const aNumber = 100.672;

// Operations: Things we can do to data types based on what they are.
// Addition, subtraction, multiplication, exponentiation, division, logarithms, etc etc

console.log('Addition: ', 2 + 2);
console.log('Subtraction: ', 2 - 2);
console.log('Division: ', 2 / 2);
console.log('Multiplication: ', 2 * 2);
console.log('Exponentiation: ', 2 ** 2);
console.log('Advanced, Logs: ', Math.log2(4));
console.log('Using Variables: ', aNumber * 2);

// Strings
// A collection of (sometimes) human readable text. Text is composed of composite parts. Characters are put together to form a string.

const aString = 'Eliot Szwajkowski';
const aStudent = "Victor Martinez";
// Template Literals
const aTeacherAge = 35;
const aTeacher = `Ryan Riley Puzon

is so cool

and his age is ${aTeacherAge}
`;

// Operations
// Concatenation
// Putting two strings together
const anotherStudent = "Jon" + ` ` + 'Hinson';

// Coercion

console.log(1 + 1); // 2
console.log('Eliot ' + 'Szwajkowski'); // 'Eliot Szwajkowski'
console.log(1 + '1'); // '11' 😡
console.log(1 + '1' - 1); // '10' 😵

// Avoid coercion at all costs.

// Objects

// Array - an array is a list of any other datatypes. An array is a subtype of objects.
// Dictionary - a collection of keyed values.
const aDict = {
    name: 'EliotSzwajkowski',
    age: Infinity,
    pets: 2,
};

// undefined
// Undefined means we forgot to assign a value to something.
let coolThing;

// null
// null is an intentional value meaning "nothing". It is often used to notate a variable as not having been given its value yet.
let otherCoolThing = null;

// NaN
NaN
// A symbol for a number we cant represent
console.log('Are you a not a number?', isNaN(NaN));

// typeof

console.log('TypeOf', typeof NaN);
