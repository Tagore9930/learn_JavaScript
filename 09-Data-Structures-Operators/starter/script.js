'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address = 'India',
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];

console.log('Bad way to add array values', badNewArr);

const newArr = [1, 2, ...arr1];

console.log('new way to add array values', newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const mainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log('Main menu', mainMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// console.log(`${menu, menu}`);

// Iterables: arrays, strings, maps, sets. NOT object
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(
  "String value converts to array with 'S.' using spread operators ",
  letters
);
console.log('Normal string divide with spread operator without array', ...str);
// console.log(`${...str} Schmedtmann`);

// Real-world Example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

const newRestarunt = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log('newRestarunt details', newRestarunt);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log('restaurantCopy.name', restaurantCopy.name);
console.log('restaurant.name', restaurant.name);

/**
 //////////////////////////////////////////////////
 // Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Bengaluru, Karnataka, India - 560032',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;

console.log('restaurantName', name);
console.log('opening hours', openingHours);
console.log('Categories', categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('restaurantName', restaurantName);
console.log('opening hours', hours);
console.log('Categories', tags);

const { menu = [], starterMenu: starter = [] } = restaurant;

console.log('menu', menu);
console.log('starterMenu', starter);
console.log('categories', tags);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 27, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

// Nested objects

const {
  fri: { open: opened, close: closed },
} = openingHours;

// console.log('fri', fri);
console.log('fri opened', opened);
console.log('fri closed', closed);
*/

/**
 ///////////////////////////////////////////////////
 // Destructuring Arrays
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log('test', a, b, c);

const [x, y, z] = arr;

console.log('test2', x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];

console.log(main, secondary);

// Recevice 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i,,j] = nested;

const [i, , [j, k]] = nested;

console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);

*/
