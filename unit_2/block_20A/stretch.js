// Write a function "gobbler" that takes a number, and it writes 2 ^ number "Gobble"s into a string, ending with an exclamation mark.

function gobbler(howManyGobbles) {
    const gobbleCount = 2 ** howManyGobbles;

    let gobbleString = '';

    for (let i = 0; i < gobbleCount; ++i) {
        gobbleString += 'Gobble ';
    }

    gobbleString = gobbleString.slice(0, -1);

    return gobbleString + '!';
}

const result = gobbler(0);

console.log(result); // => "Gobble!"

const result2 = gobbler(4);

console.log(result2); // => "Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble!"
