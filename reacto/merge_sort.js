const merge = (left, right) => {
    const sortedArr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    const combinedArr = [...sortedArr, ...left, ...right];

    console.log('Combined: ', combinedArr);

    return combinedArr;
};

// MS [3, 2, 4, 1]
// MS [3, 2]
// MS [3]
// MS [2]
// M ([3], [2]) => [2, 3]
// MS [4, 1]
// MS [4]
// MS [1]
// M ([4], [1]) => [1, 4]
// M ([2, 3], [1, 4]) => [1, 2, 3, 4]
const mergeSort = (listOfNumbers) => {
    if (listOfNumbers.length < 2) {
        return listOfNumbers;
    }

    const halfPoint = Math.round(listOfNumbers.length / 2);

    const left = listOfNumbers.splice(0, halfPoint);
    const right = listOfNumbers;

    console.log('Left: ', left, 'Right: ', right);

    return merge(mergeSort(left), mergeSort(right));
};

const generateArray = (size) => {
    return new Array(size).fill('').map(() => {
        return Math.round(Math.random() * 1000);
    });
};

console.log('Final Result: ', mergeSort(generateArray(25)));
