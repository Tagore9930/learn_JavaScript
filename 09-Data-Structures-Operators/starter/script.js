'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// The game Object:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Your order is ${mainIngredient} pizza with ${otherIngredients}`
    );
  },
};

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

Info: The game object is there in top of the file code.
*/

// 1.
const [players1, players2] = game.players;

console.log('The players 1', players1);
console.log('The players 2', players2);

// 2.
const [gk, ...fieldPlayers] = players1;

console.log(
  `The players 1 goal keeper is ${gk} and field players is `,
  fieldPlayers
);

// 3.
const allPlayers = [...players1, ...players2];

console.log(`The all players is `, allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(`The players1 Final is`, players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(
  `The team1 wins: ${team1}\nThe team2 wins: ${team2}\nThe draws: ${draw}`
);

// 6.
const printGoals = (...players) => {
  console.log('The all scored players is', players);
  console.log(`${players.length} goals were scored.`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');

/* //////////////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Bharath kumar',
  // numGuests: 20
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator.
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

*/

/* //////////////////////////////////////////////////
// The Nullish Coalesing Operator.
restaurant.numGuests = 0;
const guestsCount = restaurant.numGuests || 10;
console.log(guestsCount);

// Nullish: null and undefined (NOT 0 or '').
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/* //////////////////////////////////////////////////
// Short Circuiting (&& and ||).

console.log('---- OR ----');
// Use any data type, return any data type, short-circuiting.
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guestCount1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log('Assigning default value with ternary ', guestCount1);

const guestCount2 = restaurant.numGuests || 10;

console.log('Assigning default value with || operator ', guestCount2);

console.log('---- AND ----');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example:

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/* //////////////////////////////////////////////////
// Rest Pattern and Parameters.
// 1) Destructuring.

// SPEARD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log('Used REST operator to divide an array', a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(
  'Real world sample of divide using Rest',
  pizza,
  risotto,
  otherFoods
);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;

console.log('Objects divide sample', sat, weekdays);

// 2) Functions

const addNums = (...nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(`Added these [${nums}] numbers and the result is "${sum}".`);
};

addNums(9, 9);
addNums(2, 3, 4);
addNums(2, 3, 4, 5, 6, 7);

// Using a array of numbers.
const allSubjectMarks = [41, 50, 46, 36, 44];

addNums(...allSubjectMarks);

// Real world rest function example

restaurant.orderPizza('Mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('Mushrooms', 'cheese');
*/

/*
 //////////////////////////////////////////////////
// The Spread Operator (...)

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
*/

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
