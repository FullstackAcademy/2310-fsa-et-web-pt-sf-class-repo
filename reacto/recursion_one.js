// Prompt
// Write a function "reverseString" that takes a string as input, and returns that string reversed. You MUST use recursion for your answer. Any form of looping (including built-ins like .forEach) are forbidden for your solution.

// hello
// ello
// llo
// lo
// o
// ''
// ''

const reverseString = (inputString) => {
    console.log('Going Down: ', inputString);

    // Base Case - Where do we stop calling ourselves again?
    if (inputString.length === 0) {
        return '';
    }
    // Recursive Case - When do we call ourselves again?
    const restOfCharactersReversed = reverseString(inputString.substring(1, inputString.length));
    console.log('Result of Reversal While Coming Up: ', restOfCharactersReversed);

    // Return - How do we create the value over time?
    return restOfCharactersReversed + inputString[0];
}

console.log(reverseString('hello')); // => olleh












// Solution
// const reverseString = (inputString) => {
//     // Base Case: Return nothing if there are no characters left.
//     if (inputString.length === 0) {
//         return '';
//     }
//
//     // Recursive Case: Reverse every character in the string besides for the first one.
//     const restOfStringReversed = reverseString(
//         inputString.substring(1, inputString.length),
//     );
//
//     // Because, we will append whatever the "first" character was at this level to the end of the rest of the string reversed.
//     return restOfStringReversed + inputString.charAt(0);
// };
//
// console.log(reverseString('hello')); // => olleh
