// **********************
//DEMO JSON (parsing and printing)
// **********************
// **********************
// Learning Objectives
//  - JSON methods (parse and stringify)
// **********************

const obj = { name: "John", age: 30, car: null };

const str = JSON.stringify(obj, null, 2);
console.log(str);
console.log(typeof str, "\n");

const obj2 = JSON.parse('{"name": "John", "age": 30, "car": null}');

console.log("This becomes an object:", obj2);
console.log(typeof obj2);
