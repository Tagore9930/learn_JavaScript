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
