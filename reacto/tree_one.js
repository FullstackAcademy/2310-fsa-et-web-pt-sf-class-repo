// Trees

// Guess what Im number Im thinking?
// The number is between 0 and 100

// 10
// 50
// 76
// 60
// 68
// 64
// 61
// 62

// They tell you lower or higher at every interval allowing super fast search lookups for particular data

// 30

// 50
// 25
// 37
// 31
// 28
// 29
// 30

class BinaryTree {
    value = null;

    left = null;

    right = null;

    constructor(value) {
        this.value = value;
    }

    insert = (value) => {
        if (value < this.value) {
            if (!this.left) {
                const createdNode = new BinaryTree(value);
                this.left = createdNode;

                return createdNode;
            } else {
                return this.left.insert(value);
            }
        } else {
            if (!this.right) {
                const createdNode = new BinaryTree(value);
                this.right = createdNode;

                return createdNode;
            } else {
                return this.right.insert(value);
            }
        }
    }

    retrieve = (value) => {
        console.log('Searching Into Node with Value: ', this.value);

        if (this.value === value) {
            return this.value;
        } else if (value < this.value) {
            if (!this.left) {
                return null;
            } else {
                return this.left.retrieve(value);
            }
        } else {
            if (!this.right) {
                return null;
            } else {
                return this.right.retrieve(value);
            }
        }
    }
}

const generateNumbers = (size) => {
    const uniqueNumbers = new Set(
        new Array(size).fill('').map(() => {
            return Math.round(Math.random() * 100000);
        }),
    );

    return Array.from(uniqueNumbers);
};

const allNums = generateNumbers(1000000);

const root = new BinaryTree(allNums.shift());

allNums.forEach((num) => root.insert(num));

root.retrieve(321);
