// Importing module
// import './shoppigCart.js';
// console.log('Importing modulue');

// import { addToCart, totalPrice, totalQuantity as tq } from './shoppigCart.js';
// import { addToCart, totalPrice, tq as tq } from './shoppigCart.js';

// addToCart('Apple', 5);
// addToCart('Mango', 3);
// addToCart('Orango', 2);

// console.log(totalPrice, tq);

// import * as shoppingCart from './shoppigCart.js';
// shoppingCart.addToCart('carrot', 4);
// console.log(shoppingCart?.totalPrice, shoppingCart.totalQuantity);

import add, { cart } from './shoppigCart.js';

add('water-mealon', 2);

console.log(cart);
