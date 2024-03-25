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

    breadthSearch = () => {
        const breadthArray = [];
        const childrenToProcess = [];

        breadthArray.push(this.value);

        if (this.left) {
            childrenToProcess.push(this.left);
        }

        if (this.right) {
            childrenToProcess.push(this.right);
        }

        while (childrenToProcess.length) {
            const nextChild = childrenToProcess.shift();

            breadthArray.push(nextChild.value);

            if (nextChild.left) {
                childrenToProcess.push(nextChild.left);
            }

            if (nextChild.right) {
                childrenToProcess.push(nextChild.right);
            }
        }

        return breadthArray;
    }

    recursiveSearch = (type, searchFunc) => {
        if (type === 'pre') {
            searchFunc(this.value);
        }

        this.left?.recursiveSearch(type, searchFunc);

        if (type === 'in') {
            searchFunc(this.value);
        }

        this.right?.recursiveSearch(type, searchFunc);

        if (type === 'post') {
            searchFunc(this.value);
        }
    }
}

/*
                5
              3   7
            2  4    8
*/

const root = new BinaryTree(5);
root.insert(3);
root.insert(7);
root.insert(2);
root.insert(4);
root.insert(8);

console.log('Breadth', root.breadthSearch());

// Pre-Order, Post-Order, In-Order

const preArray = [];
const postArray = [];
const inArray = [];

root.recursiveSearch('pre', (val) => {
    preArray.push(val);
});

root.recursiveSearch('post', (val) => {
    postArray.push(val);
});

root.recursiveSearch('in', (val) => {
    inArray.push(val);
});

console.log('Pre', preArray);
console.log('Post', postArray);
console.log('In', inArray);
