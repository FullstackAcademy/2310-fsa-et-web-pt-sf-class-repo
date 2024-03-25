// Prompt
/*
Add a method to BinaryTree called "locateMaxValue". Given the below class, the method should find the max value in the current tree.

Add a method to BinaryTree called "locateMinValue". Given the below class, the method should find the min value in the current tree.

Add a method to BinaryTree called "accumulateTree". This method should return the tree as an array in ANY order. Essentially converting the tree to an array and disregarding any semblance of order.
*/

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
}

// Solution
// I'm writing this as standalone functions to save space. These should actually be written as methods on the class.

function locateMaxValue() {
    if (this.right) {
        return this.right.locateMaxValue();
    } else {
        return this.value;
    }
}

function locateMinValue() {
    if (this.left) {
        return this.left.locateMinValue();
    } else {
        return this.value;
    }
}

const values = [];

function accumulateTree(child) {

}
