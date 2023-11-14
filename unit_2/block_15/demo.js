const fruit = {
  name: "banana",
  color: ["green", "yellow", "brown"],
  sugar: 14,
  isAvailable: true,
};

const shoe = {
  brand: "converse",
  hasLaces: true,
  hasVelcro: false,
  color: "green",
  price: 50,
  activityType: "basketball",
};

// console.log(shoe.color);
// console.log(shoe["color"]);
// console.log(shoe.brand);
// console.log(shoe["brand"]);
// console.log(shoe.lincoln);

const car = {
  color: "blue",
  brand: "honda",
  trim: "sport",
};
console.log(car.color);
car.weight = "1577kg";
car.color = "red";

car.trim = null;
console.table(car);

// let property = "color";
// console.log(car[property]);
// console.log(car["color"]);

// property = "brand";
// console.log(car[property]);

for (const key in car) {
  console.log(car[key]);
}

// console.log(Object.keys(shoe));
// console.log(Object.values(shoe));

// console.log(Object.values(fruit));
// let array = Object.values(fruit);

// console.log(array[1][0]);
console.log(car);
console.log(typeof car);
