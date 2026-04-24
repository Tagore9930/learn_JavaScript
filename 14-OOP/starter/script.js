'use strict';

/* /////////////////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function () {
  // console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
*/

/* //////////////////////////////////////////////
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// console.log(Person);
// console.log(Person.__proto__);
// console.log(Person.prototype);
// console.log(typeof Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapien';
// Person.prototype.species = 'Animals';

console.log(jonas.species, jack.species);
// console.log(new Person().species);
// console.log(Person.prototype.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
// console.log(jonas.__proto__.hasOwnProperty('species'));

*/

/* ///////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// function unique() {
//   return [...new Set(this)];
// }
// Array.prototype.unique = unique;

console.dir(arr.unique());
console.dir(arr.unique);

const h1 = document.querySelector('h1');

console.dir(h1);
console.dir(x => x + 1);

*/

////////////////////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A
car has a make and a speed property. The speed
property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will
increase the car's speed by 10, and log the new speed
to the console;
3. Implement a 'brake' method that will decrease the
car's speed by 5, and log the new speed to the
console;
4. Create 2 car objects and experiment with calling
'accelerate' and 'brake' multiple times on each of
them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK
*/

/*
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;

  console.log(`${this.name} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

console.log(BMW);
console.log(Mercedes);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.accelerate();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.brake();

*/

// ES6 Classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const tagore = new PersonCl('tagore', 2021);
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

tagore.calcAge();
tagore.greet();

console.log(tagore.__proto__ === PersonCl.prototype);
