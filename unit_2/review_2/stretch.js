// Write a function "writeObj" that takes an array, and writes every even index as a key, with the following odd index as its value to an object that it returns.

const arrOfTrainersAndPokemon = ['Ash', 'Pikachu', 'Gary', 'Pidgey', 'Misty', 'Starmie'];

function writeObj(arr) {
    const trainerObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        const key = arr[i] // 0 - 2 - 4
        const value = arr[i + 1] // 1 - 3 - 5

        trainerObj[key] = value;
    }

    return trainerObj;
}

const result = writeObj(arrOfTrainersAndPokemon);

console.log(result);

// => { 'Ash': 'Pikachu', 'Gary': 'Pidgey', 'Misty': 'Starmie' }
