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
