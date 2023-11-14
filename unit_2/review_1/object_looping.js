// Nested Object
// Dictionary
// An object keyed with strings.
const questions = {
    onlyOdds: {
        difficulty: 2,
    },
    crazyCaps: {
        difficulty: 4,
    },
};

for (let key in questions) {
    console.log(key);

    const value = questions[key];

    console.log(value);
}

const keys = Object.keys(questions);
console.log('Keys', keys);

// for (let i = 0; i < keys.length; ++i) {
//     const key = keys[i];
//     const value = questions[key];
//
//     console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
// }

const values = Object.values(questions);
console.log('Values', values);

const entries = Object.entries(questions);
console.log('Entries', entries);

questions.mySlice = {
    difficulty: 3,
};

questions['my-slice'] = {
    difficulty: 3,
};
