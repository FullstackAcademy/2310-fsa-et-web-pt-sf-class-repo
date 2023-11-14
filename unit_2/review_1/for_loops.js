// For Loops
// Alexis says, helps a programmer do less manual work and repeat a task multiple times
// Marcus says, Repeat a set of instructions multiple times

// Some task
// Do that task a lot

// const someArray = [1, 2, 3, 4, 5];

// For loops are often thought of as being for lists, but they can do all sorts of stuff.

// let lotsOfHellos = '';
//
// for (let i = 0; i < 100; i++) {
//     // someArray[i]
//
//     lotsOfHellos += 'Hello!';
// }
//
// console.log(lotsOfHellos);

// const someStupidArray = [];
//
// for (let i = 0; i <= someStupidArray.length; i++) {
//     someStupidArray.push('Snowing');
// }
//
// console.log(someStupidArray.length);

// let myName = 'Eliot Szwajkowski';
//
// while (myName.length) {
//     console.log(myName[0]);
//     myName = myName.slice(1);
// }

// When should I use a while loops versus a for loop?
// Always use a for loop
// .while should only be used when the condition to end the repetition involves "emptying" some sort of object

// The fluidity of the arguments to for loops is vast!
// The only rule is that you initialize a value, you have a way for the for loop to end, and that you update the value to get closer to ending the loop.

for (let name = ''; name.length <= 12; name += 'ALEXIS') {
    console.log(name);
}

// Quintessentially the same
// const items = [1, 2, 3, 4, 5];
//
// for (let item of items) {
//
// }
//
// items.forEach((item) => {
//
// });
