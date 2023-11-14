const fruitsArray = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌'];

const fruitsObject = {
    grape: { emoji: '🍇', price: 3.79, color: 'purple' },
    melon: { emoji: '🍈', price: 3.19, color: 'green' },
    watermelon: { emoji: '🍉', price: 4.19, color: 'green and pink' },
    tangerine: { emoji: '🍊', price: 3.97, color: 'orange' },
    lemon: { emoji: '🍋', price: 3.99, color: 'yellow' },
    banana: { emoji: '🍌', price: 2.02, color: 'yellow' },
};

// forEach

// old way of looping
// for(let i = 0; i < fruitsArray.length; i++){
//     console.log(fruitsArray[i]);
// }

// fat arrow function (callback)
fruitsArray.forEach((fruit, index) => console.log(`${fruit}: ${index}`));


// fruitsArray.forEach(function(fruit){
//     console.log(fruit)
// })

// map
const fruits = Object.values(fruitsObject);
const fruitNames = Object.keys(fruitsObject);
const fruitPrices = fruits.map((fruit) => fruit.price);
// console.log(fruitPrices);

// reduce
const groceryTotal = fruitPrices.reduce((sum, currentPrice) => sum + currentPrice, 0);
// console.log(groceryTotal)
// rounds up a number
// console.log(Math.floor(groceryTotal))

// filter
// const yellowFruits = fruitsArray.filter((fruit) => fruit === '🍋' || fruit === '🍌' )
const yellowFruits = fruits.filter((fruit) => fruit.color === 'yellow').map((fruit) => fruit.emoji);
// console.log(yellowFruits);

// find
const grapeFruit = fruitsArray.find((fruit) => fruit === '🍇' );
// console.log(grapeFruit);

// slice
const threeFruits = fruitsArray.slice(0,3);
// console.log(threeFruits);