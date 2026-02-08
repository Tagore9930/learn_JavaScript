'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const snackbar = document.querySelector('.snackbar');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnSnackbarClose = document.querySelector('.snackbar--close');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
            i + 1
          } ${type}</div>
          <!-- <div class="movements__date">3 days ago</div> -->
          <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

function calDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
}

function calDisplaySummary(account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${income}€`;

  const outcome = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${Math.abs(interest)}€`;
}

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc?.movements);

  // Display Balance
  calDisplayBalance(acc);

  // Display Summary
  calDisplaySummary(acc);
};

createUserNames(accounts);
// console.log(accounts);

let currentAccount;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('Login successful', currentAccount);

    // Display UI and show welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount?.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;

    // clear login fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log(
      'The login details is wrong. My bank have only these accounts',
      accounts,
    );
    showSnackbar('error', 'Login details are invalid.');

    setTimeout(() => {
      alert('Please check in console to get existing accounts.');
    }, 1000);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverUserName = inputTransferTo.value;
  const receiverAcc = accounts.find(acc => acc?.username == receiverUserName);

  console.log(receiverAcc);

  if (!receiverUserName || !receiverAcc) {
    showSnackbar('warning', 'Transfer Receive account is not exist');
    return;
  }

  console.log('amount', amount, Boolean(!amount));
  if (!amount) {
    showSnackbar('warning', 'The amount is not valid.');
    return;
  }

  if (currentAccount?.balance < amount) {
    showSnackbar('error', `You does have ${amount} in your account.`);
    return;
  }

  console.log(
    receiverAcc?.username && receiverAcc?.username === currentAccount?.username,
    receiverAcc?.username,
    receiverAcc?.username,
    currentAccount?.username,
  );

  if (
    receiverAcc?.username &&
    receiverAcc?.username === currentAccount?.username
  ) {
    showSnackbar('warning', `The self transfer is not possible.`);
    return;
  }

  console.log('Transfer the amount.');
  currentAccount.movements.push(-amount);
  receiverAcc.movements.push(amount);
  inputTransferTo.value = inputTransferAmount.value = '';
  showSnackbar('success', `The amount is transfered successfully.`);

  // Update UI
  updateUI(currentAccount);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (currentAccount.username == username && currentAccount.pin === pin) {
    const accIndex = accounts.findIndex(
      acc => acc.username === username && acc.pin === pin,
    );

    // Delete account
    accounts.splice(accIndex, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
    labelWelcome.textContent = 'Log in to get started';
  } else {
    showSnackbar('error', 'The account details is not matching to current.');
  }
});

// Snackbar

const snackbarTypes = ['success', 'warning', 'error'];
let snackBarTimeout = null;

function showSnackbar(type, text) {
  removeSnackbar();
  console.log('showSnackbar is called');
  if (!snackbarTypes.includes(type)) {
    console.error(
      `The snackbar is type is mismatch (${type}), The snacker have only these types ${snackbarTypes}`,
    );
  }
  const snackbarInfoTextEle = snackbar.querySelector('.snackbar-info');
  snackbarInfoTextEle.textContent = text;
  snackbar.classList.add(type);

  snackBarTimeout = setTimeout(() => {
    removeSnackbar();
  }, 4000);
}

function removeSnackbar() {
  snackbar.classList?.remove('success', 'warning', 'error');
  const snackbarInfoTextEle = snackbar.querySelector('.snackbar-info');
  snackbarInfoTextEle.textContent = '';
  clearTimeout(snackBarTimeout);
}

btnSnackbarClose.addEventListener('click', function (e) {
  e.preventDefault();
  removeSnackbar();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - It will not modify the original
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE - It will modify the original arr.
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - It is reverse the original arr.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']; // This will reverse order for some reason.
console.log(arr2.reverse()); // this correct the arr.
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' '));

*/

/*
///////////////////////////////////////
// The new at Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element types
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('tagore'.at(0));
console.log('tagore'.at(-1));

*/

/*
//////////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const mov of movements) {
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i}: You withdraw ${Math.abs(mov)}`);
  }
}

console.log('--- FOREACH ---');
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i}: You withdraw ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

*/

//////////////////////////////////////////////
// Sets practice with my brother.

/*
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);

console.log(A);
console.log(B);

const a = A.union(B); // 3 - A U B
const b = A.intersection(B); // 3 - A !U B
const c = A.difference(B); // 1, 2 - A - B

console.log(a);
console.log(b);
console.log(c);

*/

/*
//////////////////////////////////////////////
// forEach With Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
  Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

  Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

  1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  2. Create an array with both Julia's (corrected) and Kate's data
  3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  4. Run the function for both test datasets

  HINT: Use tools from all lectures in this section so far 😉

  TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
  TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

  GOOD LUCK 😀
*/

/*
function checkDogs(dogsJulia, dogsKate) {
  const juliaOnlyDogs = [...dogsJulia];
  juliaOnlyDogs.splice(0, 1);
  juliaOnlyDogs.splice(-2, 2);
  console.log(juliaOnlyDogs);
  const finalArr = [...juliaOnlyDogs, ...dogsKate];
  finalArr.forEach((dogAge, i) => {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

// Test 1:
console.log('Test 1:');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Test 2:
console.log('Test 2:');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/

/*
// The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log('movementsUSD', movementsUSD);

// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov * euroToUsd);
// }

// console.log('movementsUSD for', movementsUSDFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

console.log('Movements description', movementsDescriptions);

*/

/*
// The filter Method

const deposits = movements.filter(mov => mov > 0);

console.log('deposits', deposits);

// For of: This is not chainable, thats why it is not using in this cases.
// const depositsFor = [];

// for (const mov of movements) if(mov > 0) depositsFor.push(mov);

const withdrawals = movements.filter(mov => mov < 0);
console.log('withdrawals', withdrawals);

*/

/*
// The reduce Method

console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   // console.log(acc, cur, i, arr);
//   console.log(` ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const maxValue = movements.reduce(
  (acc, mov) => (acc < mov ? mov : acc),
  movements[0],
);

console.log('Maximum value: ', maxValue);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

function calcAverageHumanAge(dogsAges) {
  // calculate human ages:
  const humanAges = dogsAges.map(dogsAge =>
    dogsAge <= 2 ? 2 * dogsAge : 16 + dogsAge * 4,
  );

  // Remove less than 18 years ages:
  const adultAges = humanAges.filter(humanAge => humanAge >= 18);

  // Sum all adult ages
  const sumAdultsAge = adultAges.reduce((acc, age) => acc + age, 0);

  // Calculate average of all adult ages.
  const averageAdult = sumAdultsAge / adultAges.length;

  console.log('Dogs Ages:', dogsAges);
  console.log('Average human age:', averageAdult);

  return averageAdult;

  // [2, 3]. (2 + 3) / 2 = 2.5 === 2/2 + 3/2 = 2.5

  // Way 1 (2 + 3) / 2:
  // return adultAges.reduce((acc, age) => acc + age, 0) / adultAges.length;

  // Way 2 (2/2) + (3/2):
  // return adultAges.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);

*/

/*
// The Magic of Chaining Methods

const euroToUsd = 1.1;

console.log('Movements', movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

*/

/* 
// CHALLENGE #3

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const calcAverageHumanAge = dogsAges =>
  dogsAges
    .map(dogsAge => (dogsAge <= 2 ? 2 * dogsAge : 16 + dogsAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);

*/

/*
// The find Method

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

*/
