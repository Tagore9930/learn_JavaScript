// Destructuring Arrays

const { books } = require('./books');

// 1.1 Destructure the books array into two variables called firstBook and secondBook.

// Ans:
const [firstBook, secondBook] = books;

console.log('firstBook', firstBook);
console.log('secondBook', secondBook);

// 1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.

// Ans:
const [, , thirdBook] = books;

console.log('thirdBook', thirdBook);

// 1.3 Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

// Ans:

const [[, rating], [, ratingsCount]] = ratings;

console.log('ratings Array', ratings);
console.log('rating', rating);
console.log('ratingsCount', ratingsCount);

// 1.4 Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];

// Ans:
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;

console.log('ratingStars Array', ratingStars);
console.log('fiveStarRatings', fiveStarRatings);
console.log('oneStarRatings', oneStarRatings);
console.log('threeStarRatings', threeStarRatings);
