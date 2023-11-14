// regular object
const michell = {
    firstName: 'michell',
    lastName: 'brito',
    getFirstName: function () {
        return 'michell';
    }
}

// console.log(michell.getFirstName())

// function with parm
function getFirstName(name) {
    console.log(name);
}

// getFirstName('michell')
// getFirstName('Daniel')
// getFirstName('Keevin')

class Student {
    // setting up parms within a class
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // creating functions witin a class
    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(name) {
        this.lastName = name;
    }
}

const matt = new Student('Matt', "Brown");

// // calling the keys from our class
console.log(matt.lastName);
console.log(matt.firstName);

// // calling function defined from our class
console.log(matt.getFirstName());


const sally = new Student('Sally', "Doe");
// changing the initial value passed to a class
console.log(sally.getLastName());
sally.setLastName('Gomez');
console.log(sally.getLastName());

