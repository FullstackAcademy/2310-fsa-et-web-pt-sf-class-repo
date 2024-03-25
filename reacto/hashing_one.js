// Prompt
// Write a function "hasDuplicates" that uses a hash table to detect if it has seen a value before. The hash table should operate in O(1) time. The complexity of the overall problem should be O(n).

const hasDuplicates = (nums) => {
    // TODO
}

console.log(hasDuplicates([1, 2, 3, 4, 5])); // => false
console.log(hasDuplicates([6, 7, 8, 9, 6])); // => true

// Solution
// DO NOT PASTE TO INTERVIEWEE

const hasDuplicatesSolution = (nums) => {
    // Create Hash Table
    const collection = {};

    // Don't get caught up on this - a standard for loop is fine as well. Whatever their flavor for iteration is works!
    for (let num of nums) {
        // Check the hash table for a collision.
        if (collection[num]) {
            // If there is a collision, return true.
            return true;
        }

        // Otherwise, add it to the hash table.
        collection[num] = true;
    }

    // If no collision occurred, there are no duplicates.
    return false;
}

// Stretch Goal (If Interviewee Gets It)
// Lets take that same function, and allow it to work across function calls. So if I call it with (1, 2, 3) in one call, and (3, 4, 5) in another call, it will correctly identify the second call (3, 4, 5) as having a duplicate (3) because 3 was in both the first arguments (1, 2, 3) and the second (3, 4, 5).
const cacheHasSeenDuplicates = (nums) => {
    // TODO
}

console.log(cacheHasSeenDuplicates([1, 2, 3])); // => false
console.log(cacheHasSeenDuplicates([3, 4, 5])); // => true

// Stretch Goal Solution
// DO NOT PASTE TO INTERVIEWEE
// Almost the exact same, but you must dig deep in your javascript well to remember closure, which gives functions their own memory store.
const createCacheHasSeenDuplicates = () => {
    // Create the hash table in the upper scope (the closure). So that it is accessible to the returned function in perpetuity.
    const duplicatesTable = {};

    return (nums) => {
        for (let num of nums) {
            // Check the hash table for a collision.
            if (duplicatesTable[num]) {
                // If there is a collision, return true.
                return true;
            }

            // Otherwise, add it to the hash table.
            duplicatesTable[num] = true;
        }

        // If no collision occurred, there are no duplicates.
        return false;
    };
}

const cacheHasSeenDuplicatesSolution = createCacheHasSeenDuplicates();
