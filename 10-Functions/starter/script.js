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
