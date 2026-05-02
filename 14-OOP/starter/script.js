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

Person.hey = function () {
  console.log('Hi there 👋🏻');
  console.dir(this);
};

Person.hey();
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

/* /////////////////////////////////////////////////////////
// ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property.
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('HI here 👋🏻!');
    console.dir(this);
  }
}

const tagore = new PersonCl('banda tagore', 2021);

// setTimeout(() => {
//   PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.fullName}, your age is ${this.birthYear}`);
//   };
//   tagore.greet();
// }, 1000);

tagore.calcAge();
tagore.greet();
console.log(tagore.age);

console.log(tagore.__proto__ === PersonCl.prototype);

PersonCl.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

*/

/* ////////////////////////////////////////////
// Setters and Getters

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice().pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
*/

/* ////////////////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jhon = Object.create(PersonProto);

// console.log(jhon, PersonProto);
jhon.firstName = 'jhon';
jhon.birthYear = 2002;

jhon.calcAge();

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();

*/

///////////////////////////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6
class;
2. Add a getter called 'speedUS' which returns the
current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the
current speed in mi/h (but converts it to km/h before
storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the
accelerate and brake methods, and with the getter and
setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK
*/

/*
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;

    console.log(`${this.name} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);

console.log('ford.speedUS', ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.accelerate();

console.log('ford.speedUS', ford.speedUS);
ford.speedUS = 200;
console.log('ford.speedUS', ford.speedUS);

ford.accelerate();
ford.brake();
ford.brake();
*/

/* /////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.dir(Student);

console.dir(mike.__proto__);
console.dir(mike.__proto__.__proto__);
console.dir(mike.__proto__.__proto__.__proto__);

console.dir(mike instanceof Student);
console.dir(mike instanceof Person);
console.dir(mike instanceof Object);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
*/

//////////////////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an
Electric Car (called EV) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the
current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an
argument 'chargeTo' and sets the battery charge to
' chargeTo' ;
3. Implement an 'accelerate' method that will
increase the car's speed by 20, and decrease the
charge by 1%. Then log a message like this: 'Tesla
going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with
calling 'accelerate', 'brake' and 'chargeBattery'
(charge to 90%). Notice what happens when you
'accelerate'! HINT: Review the definiton of
polymorphism

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge
of 23%

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

const EV = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.battery--;

  console.log(
    `${this.name} going at ${this.speed} km/h, with a charge of ${this.battery}%`,
  );
};

const tesla = new EV('Tesla', 120, 23);

console.dir(EV);
console.dir(tesla);

tesla.chargeBattery(90);

console.log('After charged 90%', tesla);

tesla.accelerate();
console.log('After accelerate', tesla);
*/

/* /////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property.
  calcAge() {
    console.log(2026 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2026 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('HI here 👋🏻!');
    console.dir(this);
  }
}

class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`,
    );
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
console.log(martha);

martha.introduce();
martha.calcAge();
*/

/* ///////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const bharath = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/* ///////////////////////////////////////////////////
// Another Class Example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);

      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Bharath', 'IND', 1234);

// acc1.movements.push(250);
// acc1.movements.push(-150);
acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);

*/

/* ////////////////////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  locale = navigator.language;
  bank = 'Banklist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chaninable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);

      console.log('Loan approved');
    }
    return this;
  }

  static test() {
    console.log('TESTING');
  }
}

const acc1 = new Account('Bharath', 'IND', 1234);

acc1.deposit(300);
acc1.withdraw(150);
acc1.requestLoan(15000);

// acc1.#movements;
// acc1.#pin;
// acc1.#approveLoan();

console.log(acc1);
console.log(acc1.getMovements());

Account.test();
const movements = acc1
  .deposit(2000)
  .withdraw(1500)
  .withdraw(300)
  .deposit(1000)
  .getMovements();

console.log('movements', movements);
*/

/////////////////////////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6
classes: create an 'EVCl' child class of the 'CarCl'
class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate'
and 'chargeBattery' methods of this class, and also
update the 'brake' method in the 'CarCl' class. They
experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge
of 23%

GOOD LUCK 😊
*/

class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends Carcl {
  #charge = 0;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`,
    );

    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(99)
  .accelerate()
  .accelerate()
  .brake();

console.log(rivian);
