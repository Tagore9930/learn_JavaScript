'use strict';

/* ///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 499 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5, 799);
createBooking('LH123', 3, 1100);

*/

/* ///////////////////////////////////////

// How Passing Arguments Works: Values vs. Reference

const flight = 'LH234';
const tagore = {
  name: 'Tagore Banda',
  passport: 3545457455444,
};

const checkIn = function (flightNum, passenger) {
  flightNum += '-SC919';
  passenger.name = `Mr. ${passenger?.name}`;

  if (passenger.passport == 3545457455444) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, tagore);
console.log(flight);
console.log(tagore);

// Is the same as doing...
const flightNum = flight;
const passenger = tagore;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(tagore);
checkIn(flight, tagore);
console.log('new Passport', tagore);

*/

/* ///////////////////////////////////////

// Functions Accepting Callback Functions:

// Higher order funtion with Events example.

const birthday = function (name = '') {
  const baseSpace = 33;
  name += '!';
  const totalSpace = baseSpace - (name.length + 1);
  const left = Math.floor(totalSpace / 2);
  const right = totalSpace - left;
  const finalName = ' '.repeat(left + 1) + name + ' '.repeat(right);

  const msg = `
 _________________________________
| 🎉🎂🎈 Happy Birthday 🎈🎂🎉 |
|${finalName}|
|  Wishing you a day full of joy, |
|     love, and laughter! 🎁💖   |
|                                 |
|  May all your dreams come true! |
|   🥳🌟 Enjoy your special day! |
|                                 |
|        Here's to another        |
|          amazing year!          |
|_________________________________|
  `;

  console.log(msg);
};
// birthday('Tagore');
// birthday('Jithendra');
// birthday('Keshava');
// birthday('Bharathi akka');

const wedding = function (names) {
  const [GirlName, BoyName] = names.trim().split('&');
  const msg = `
 _____________________________________
| 💍💐✨ Happy Wedding Day! ✨💐💍 |
|                                     |
|        Congratulations to the       |
|           lovely couple ❤️❤️       |
|                                     |
|         👰 Bride: ${GirlName}🧚‍♀️           |
|         🤵 Groom: ${BoyName}🤴           |
|                                     |
|     Wishing you a lifetime of       |
|       love and happiness!💞💝      |
|                                     |
|_____________________________________|
  `;

  console.log(msg);
};

function events(name, fn) {
  fn(name);
}

// events('Tagore', birthday);
// events('Jithendra', birthday);
// events('Keshava', birthday);
// events('Bharathi akka', birthday);

// events('Amma&Appa', wedding);
// events('Akka&Mama', wedding);

// Terminal highlight feature with higher order.

function textColor(text, color) {
  console.log(`%c ${text} `, `color: ${color}`);
}

function bgColor(text, color) {
  console.log(
    `%c ${text} `,
    `background-color: ${color}; font-size: 20px; color: black`
  );
}

function fontSize(text, size) {
  console.log(`%c ${text} `, `font-size: ${size};`);
}

function applyStyles(text, color, fn) {
  fn(text, color);
}

applyStyles('Success', '#00ff00', textColor);
applyStyles('Warning', '#ffff00', textColor);
applyStyles('Danger', '#ff0000', textColor);

applyStyles('Success', '#00ff00', bgColor);
applyStyles('Warning', '#ffff00', bgColor);
applyStyles('Danger', '#ff0000', bgColor);

applyStyles('I am large Text', '50px', fontSize);

*/

/* ////////////////////////////////////////

// Functions Returning Functions:

// Normal functions:
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// Small Challenge: Try to use Arrow functions for above greet method:

// My code:
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

// Expected code:
// const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hi Good Morning')('akka');
greet('Hi have a nice day')('Raivis sir');

*/

/* /////////////////////////////////////////
// The call and apply Methods:

const indiGo = {
  airline: 'IndiGO',
  planeCode: 'INGO',
  bookings: [],
  book(ticketNum, passName) {
    console.log(
      `${passName} booked a seat on ${this.airline} flight ${
        this.planeCode + ticketNum
      }`
    );
    this.bookings.push({
      ticket: this.planeCode + ticketNum,
      name: passName,
    });
  },
};

indiGo.book(123, 'Tagore');
indiGo.book(124, 'Doctor Akka');

const airIndiaExpress = {
  airline: 'Air India Express',
  planeCode: 'AIE',
  bookings: [],
};

const book = indiGo.book;

// Does not work
// book(234, 'Bharath');

// Call method:
book.call(airIndiaExpress, 234, 'Bharath');
book.call(airIndiaExpress, 235, 'Tagore');
console.log(airIndiaExpress);

book.call(indiGo, 456, 'Rani Pinni');
book.call(indiGo, 457, 'Tagore');
console.log(indiGo.bookings);

const airAsiaIndia = {
  airline: 'Air Asia India',
  planeCode: 'AAI',
  bookings: [],
};

book.call(airAsiaIndia, 908, 'Amma');
book.call(airAsiaIndia, 909, 'Appa');
console.log(airAsiaIndia);

// Apply method:
const flightData = [644, 'Raivis Kampenuss'];
book.apply(airAsiaIndia, flightData);

book.call(indiGo, ...flightData);
console.log(airAsiaIndia);

///////////////////////////////////////
// The bind Method:

// book.call(airIndiaExpress, 23, "Keshava");

const bookINGO = book.bind(indiGo);
const bookAIE = book.bind(airIndiaExpress);
const bookAAI = book.bind(airAsiaIndia);

bookINGO(12, 'Tagore');

const bookINGO24 = book.bind(indiGo, 24);

bookINGO24('Raja bharath');
bookINGO24('Ganapa bharath');

// With Event Listeners
indiGo.planes = 300;
indiGo.buyPlane = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', indiGo.buyPlane.bind(indiGo));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (rate, value) => value + value * rate;

console.log(addVAT(100));
console.log(addVAT(23));

// My own feature:

const calcTicketPrice = (ticketPrice, mems) => ticketPrice * mems;

const buyTicket = calcTicketPrice.bind(null, 499);

console.log(buyTicket(5));
console.log(buyTicket(3));

// Small challenge to create above function in function.

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.18);

console.log(addVAT2(299));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
  Let's build a simple poll app!

  A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

  Here are your tasks:

    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
       1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
      1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
    2. Call this method whenever the user clicks the "Answer poll" button.
    3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
    4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

    HINT: Use many of the tools you learned about in this and the last section 😉

    BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

    BONUS TEST DATA 1: [5, 2, 3]
    BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

    GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  // What is your favourite programming language?
  //       0: JavaScript
  //       1: Python
  //       2: Rust
  //       3: C++
  //       (Write option number)
  registerNewAnswer() {
    const userInp = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (userInp !== NaN && userInp < this.options.length) {
      this.answers[userInp] += 1;
    }

    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

/*

///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
(function () {
  const isPrivate = true;
  console.log('This will never run again');
})();

(() => {
  const isPrivate = true;
  console.log('This will also never run again');
})();

// console.log(isPrivate);

// ES6 new way for encapsulation with scope:
{
  const isPrivate = true;
  var notPrivate = true;
}

// console.log(isPrivate);
console.log(notPrivate);

*/

/*
///////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

///////////////////////////////////////
// More Closure Examples
// Example 1
let reuseFunc;

let testCount1 = 50;
function firstFunc() {
  // let testCount1 = 30;
  reuseFunc = function () {
    console.log('testCount1 increased by 2', testCount1 * 2);
  };
}

firstFunc();
reuseFunc();
console.log('First time assigned:');
console.dir(reuseFunc);

// Re-assigning reuse function.
function secondFunc() {
  let testCount2 = 200;
  reuseFunc = function () {
    console.log('testCount2 increased by 5', testCount2 * 5);
  };

  // firstFunc();
}

secondFunc();
reuseFunc();

console.log('second time assigned:');
console.dir(reuseFunc);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(90, 4);
