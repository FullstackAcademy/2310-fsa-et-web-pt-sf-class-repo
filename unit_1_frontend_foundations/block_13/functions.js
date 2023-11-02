// no parmameter, no return
function greetUser(){
    console.log('hi michell');
    console.log('how was your day?');
}

// greetUser();

// calls function to execute


// parameter, with return

// globl = not nested within another variable
function math (num1,num2){
    // local variable
    function addTwoNums(num1, num2) {
        return num1 + num2;
    }
    console.log(addTwoNums(num1, num2));
}
// math(10, 5);
// math(100, 20);
function subtract(num1,num2){
    return num1-num2;
}


// var currentAge = subtract(2023,1995);
// console.log('my current age is: ' + currentAge)

console.log('my current age is: ' + subtract(2023, 1995))

// For this question in the competency  check:

// let value = 21;

if (value < 0) {
    console.log("value is negative");
} else if (value === 20) {
    console.log("value is assigned the number 20");
} else if (value > 0) {
    console.log("value is positive");
} else {
    console.log("value is assigned the number 0");
    // return;
}

