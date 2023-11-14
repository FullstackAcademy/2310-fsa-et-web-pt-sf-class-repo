// Lists and For Loops

const aListOfNames = ['David', 'Andrew', 'Stephen', 'Victor', 'Marquez'];

// Tell me how many of the names are 6 or more characters.

function checkLengthOfName(list, maxCharacterCount) {
    let count = 0;

    for (let i = 0; i < aListOfNames.length; ++i) {
        const aName = aListOfNames[i];

        if (aName.length >= maxCharacterCount) {
            ++count;
        }
    }

    return count;
}

console.log(checkLengthOfName(aListOfNames, 3));
