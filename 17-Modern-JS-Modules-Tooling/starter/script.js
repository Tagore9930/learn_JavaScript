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

// import add, { cart } from './shoppigCart.js';

// add('water-mealon', 2);

// console.log(cart);

// const data = await fetch('https://jsonplaceholder.typicode.com/posts');
// const dataJson = await data.json();

// console.log(data, dataJson);

/* ////////////////////////////////////////////////////
// 285. Top-Level await (ES2022)

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).text };
};

// Not very clean.
const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// Very clean with Top level (script tag need type="module").
const lastPost2 = await getLastPost();

console.log(lastPost2);
*/

// 286. The Module Pattern
const ShoppigCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppigCart2.addToCart('apple', 3);
ShoppigCart2.addToCart('pizza', 2);

console.log(ShoppigCart2);
console.log(ShoppigCart2.shippingCost);
