const { books } = require('./books.json');

// Maps: Fundamentals

/*
    13.1 Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data: [['title', 'Clean Code'], ['author', 'Robert C. Martin']]
*/

// My code:
const bookMap = new Map();
const data = [
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
];

for (const [key, value] of data) {
  bookMap.set(key, value);
}

// Expected output:
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

console.log('13.1 The new book details with Map', bookMap);

/*
    13.2 Set a new key in bookMap called pages, and assign it with a number 464.
*/

bookMap.set('pages', 464);

console.log('The pages is added in new book map', bookMap);

/*
    13.3 Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
*/

const title = bookMap.get('title');
const author = bookMap.get('author');

console.log(
  '13.3 Print new book title and author with specified format: ',
  `${title} by ${author}`
);

/*
    13.4 Get the size of bookMap, and log it to the console.
*/

console.log('13.4 The new book map size is ', bookMap.size);

/*
    13.5 Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
*/

console.log('13.5 The new book map author is exists: ', bookMap.has('author'));
if (bookMap.has('author')) console.log('The author is known');
