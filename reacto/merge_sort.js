function merge(left, right) {
    let arr = [];

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {

        // Pick the smaller among the smallest element of left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }

    // Concatenating the leftover elements
    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = Math.round(array.length / 2);

    // Base case or stopping condition
    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half); // array of first half
    const right = array; // array of second half

    return merge(mergeSort(left), mergeSort(right)); // Recursive call
}

console.log(mergeSort([3, 1, 7, -2, 15, 0, 100, 2]));
