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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // thu: {   // Static object key declaring.
  [weekdays[3]]: {
    // Dynamic object key declaring.
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  [weekdays[2 + 3]]: {
    // Custom object key name declaring.
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /** Old way to assign objects */
  // openingHours: openingHours,

  /** New way to assign objects */
  openingHours,

  /** Old way to declare methods*/
  // order: function (starterIndex, mainIndex) {

  /** New way to declare methods*/
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /** Old way to declare methods*/
  // orderDelivery: function ({

  /** New way to declare methods*/
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    address = 'India',
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  /** Old way to declare methods*/
  // orderPasta: function (ing1, ing2, ing3) {

  /** New way to declare methods*/
  orderPasta(ing1, ing2, ing3) {
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

// Split and join
console.log(
  "'Tagore+is+very+good+boy' Removed all plus symbols from given string:",
  'Tagore+is+very+good+boy'.split('+')
);
console.log('Divided Full name with split method:', 'Banda Tagore'.split(' '));

const [firstName, lastName] = 'Banda Tagore'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(
  "'Banda Tagore' Added Mr word and last name uppercase from given string:",
  newName
);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const upperNames = [];

  for (const word of names) {
    upperNames.push(word[0].toUpperCase() + word.slice(1)); // Think solution in different cases, every problem not only one solution.
    // upperNames.push(word.replace(word[0], word[0].toUpperCase()));
  }

  return upperNames.join(' ');
};

console.log(
  "'bharathi prakash gowri' string converted to capitalize: ",
  capitalizeName('bharathi prakash gowri')
);
console.log(
  "'banda tagore' string converted to capitalize: ",
  capitalizeName('banda tagore')
);

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '-').padEnd(30, '-'));

const myName = 'Banda Tagore';
console.log(myName.padStart(31, '#').padEnd(50, '#'));

const maskCreditCardNum = function (num) {
  const strNum = num + '';
  const lastNums = strNum.slice(-4);
  return lastNums.padStart(num.length, '*');
};

console.log(
  "'1234567890' My test credit card number with masked",
  maskCreditCardNum('1234567890')
);

console.log(
  'Large number with masked',
  maskCreditCardNum('12345678900986431234567')
);

// Repeat
const chatMsg = 'Jai sree ram\n';

console.log(chatMsg.repeat(11));

const vehiclesInLine = function (vehicleName, count, icon) {
  console.log(
    `There are ${count + ' ' + vehicleName + icon} in line ${icon.repeat(
      count
    )}`
  );
};

vehiclesInLine('Car', 5, '🚗');
vehiclesInLine('Scooty', 10, '🛵');
vehiclesInLine('Bus', 10, '🚌');

/* ///////////////////////////////////////////////
// Working with Strings - Part 2

const airline = 'IndiGO Air Travels India';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in name
const passName = 'TaGoRE';
const nameLower = passName.toLowerCase();
const capitalizationName = passName[0].toUpperCase() + nameLower.slice(1);
console.log(
  `The passenger name(${passName}) with Capitalization: ${capitalizationName}`
);

// Compare emails:
const compareEmails = (correctEmail, loginEmail) => {
  const formatedEmail = loginEmail.trim().toLowerCase();
  return correctEmail === formatedEmail;
};
console.log(compareEmails('tagore123@gmail.com', 'Tagore123@Gmail.Com'));
console.log(compareEmails('bharthi123@gmail.com', '  Bharthi123@Gmail.Com \n'));
console.log(compareEmails('gowri123@gmail.com', '  Gowri@Gmail.Com \n'));

// Replacing
const priceIN = '23,245₹';
const priceUS = priceIN.replace('₹', '$').replace(',', '.');

console.log(`The indian price is ${priceIN}`);
console.log(`The usa price is ${priceUS}`);

const announcement =
  'All passengers come to boading door 23. Boarding door 23!';

// const correctAnnouncement = announcement.replace('door', 'gate');
const correctAnnouncement = announcement.replaceAll('door', 'gate');
// const correctAnnouncement = announcement.replace(/door/g, 'gate'); // If replaceAll method is not working, then use this.

console.log(`The correct announcement is "${correctAnnouncement}"`);

// Booleans
const plane = 'IndiGO Airbus A2342';

console.log(plane.includes('IndiGO'));
console.log(plane.includes('A2342'));
console.log(plane.includes('Pak'));

if (plane.startsWith('IndiGO') && plane.endsWith('A2342')) {
  console.log('This is new IndiGO Airbus');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

*/

/* ////////////////////////////////////////////////////

// Working with Strings - Part 1

const airline = "IndiGO Air Travels India";
const plane = "B0210";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B1002'[0]);

console.log(airline.length);
console.log('B1002'.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(7));
console.log(airline.slice(7, 10));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


console.log(airline.slice(-1));
console.log(airline.slice(0, -5));

const isMiddleSeat = function (passName, seat) {
  let seatType = seat.slice(0, 1);
  // console.log(seatType);
  
  if(seatType === 'B' || seatType === 'E') {
    console.log(`${passName} got the middle seat 😬`);
  } else {
    console.log(`${passName} got lucky 😎`);
  }
}

isMiddleSeat('Veera', 'A9900');
isMiddleSeat('Chandra', 'B9901');
isMiddleSeat('Keshava', 'C9902');
isMiddleSeat('Jithendra', 'D9903');
isMiddleSeat('Tagore', 'E9904');
isMiddleSeat('Bharathi', 'F9905');
isMiddleSeat('Gowri', 'G9906');


console.log(new String('Tagore'));
console.log(typeof new String('Tagore'));

console.log(typeof new String('Tagore').slice(1));

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
// 1. 
const events = [...new Set(gameEvents.values())];

console.log("1. The games event types", events);

// 2. 
// My code:
// for (const [key, value] of gameEvents) {
//   if (value === '🔶 Yellow card') {
//     gameEvents.delete(key);
//   }
// }

// Expected code: We need to remove only 64 yellow card (Not all yellow cards)
gameEvents.delete(64);

console.log("2. ", gameEvents);

// 3.
console.log("3. ", `An event happened, on average, every ${90 / gameEvents.size} minutes`);


// 4. 
console.log("4. ");

for (const [key, value] of gameEvents) {
  const halfType = (key < 45) ? "FIRST" : "SECOND"
  console.log(`[${halfType} HALF] ${key}: ${value}`);
}

*/

/* //////////////////////////////////////////////

// Map: Iteration

const quiz = new Map([
  ['question', 'What is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

// Convert any object to map:
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log('Converted openingHours object to Map', hoursMap);

// Quiz App
console.log('Question: ', quiz.get('question'));
for (const [key, value] of quiz) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${value}`);
  }
}

// const userAns = Number(
//   prompt(
//     'Your answer:- \n Note: your answer should be in number type like 1 or 2 or 3.'
//   )
// );

const userAns = 3;

console.log('User Answer:', userAns);

const correctAns = quiz.get('correct');
console.log(quiz.get(userAns === correctAns));

// Convert map to array.
console.log([...quiz]);
// console.log([...quiz.entries()]); // The above line and this line is same.
console.log([...quiz.keys()]);
console.log([...quiz.values()]);

*/

/* //////////////////////////////////////
// Map: Fundamentals

const rest = new Map();

// Map.set() to add items in map.
rest.set('name', 'Classico Italian');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// Map.get() to get the value with a specific key.
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

*/

/* ////////////////////////////////////////
// New Operations to Make Set Useful

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
  'rice',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const indianFoods = new Set([
  'Roti',
  'Chapati',
  'Rice',
  'Dal',
  'tomatoes',
  'garlic',
]);

const specialFoods = new Set([
  'Donuts',
  'Pizza',
  'Burger',
  'Sandwich',
  'French fries',
]);

// Intersection Def: It will give common values from (2 or more) sets.
const commonFoodsSet = italianFoods.intersection(mexicanFoods);
const commonFoodsArray = [...commonFoodsSet];
// Shortcut.
// const commonFoodsArray = [...italianFoods.intersection(mexicanFoods, indianFoods)];

console.log('Intersection: ', commonFoodsSet);

console.log(
  'The common foods',
  commonFoodsArray,
  'in italianFoods and mexicanFoods'
);

// Union Def: It will merge (2 or more) sets with unique values (Don't allows duplicates).

const mergedFoodSets = italianFoods.union(mexicanFoods, indianFoods);
const mergedFoodArr = [...mergedFoodSets];
console.log('Union:', mergedFoodSets);

console.log(
  'The merged italian, mexican and indian foods with unique.',
  mergedFoodArr
);

// Deference Def: it will give unique first set values from other sets(removes duplicate values from sets and give only first set values).

const uniqueItalianFoods = italianFoods.difference(mexicanFoods, indianFoods);

console.log('Deference:', uniqueItalianFoods);

// SymmetricDifference: it will give unique set values for given sets.

const uniqueFoods = italianFoods.symmetricDifference(mexicanFoods);
const uniqueFoods2 = italianFoods.union(mexicanFoods);

console.log('SymmetricDifference: ', uniqueFoods);
console.log('Union: ', uniqueFoods2);

// isDisjointFrom Def: It will check is common values is there from given sets.

console.log('isDisjointFrom: ', italianFoods.isDisjointFrom(mexicanFoods));
console.log('isDisjointFrom: ', italianFoods.isDisjointFrom(specialFoods));

*/

/* /////////////////////////////////////
// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(new Set(staff).size);

console.log(new Set('jonasshmedtmann').size);
*/

/* ////////////////////////////////////////
// Coding Challenge #2

/
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

Info: The game object is there in top of the file code.

GOOD LUCK 😀
/

// 1.
for (const [goal, playerName] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${playerName}`);
}

// 2.
const oddValues = Object.values(game.odds);
let oddsSum = 0;

for (const value of oddValues) {
  oddsSum += value;
}

console.log(`The total odds average is ${oddsSum / oddValues.length}`);

// 3.
for (const [name, value] of Object.entries(game.odds)) {
  const teamStr = name === 'x' ? 'draw' : `victory ${game[name]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

// BONUS
let scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}

console.log('The scorers', scorers);

*/

/*
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES:
const properties = Object.keys(openingHours);
console.log(`openingHours object properties is `, properties);

// Property VALUES:
const values = Object.values(openingHours);
console.log(`openingHours object values is `, values);

// Entries Object:
const entries = Object.entries(openingHours);
// console.log(entries);

// [keys, values]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/* ///////////////////////////////////////

// Optional Chaining

if (restaurant && restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant?.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day].open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant?.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant?.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users?.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}

*/

/* /////////////////////////////////////
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) console.log(item);

console.log('Used Array.entries method for menu array', menu.entries());

for (let [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
}

*/

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

/*
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
*/

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
