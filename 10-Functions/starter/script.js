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

// Functions Returning Functions:

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

// Bind method:
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
