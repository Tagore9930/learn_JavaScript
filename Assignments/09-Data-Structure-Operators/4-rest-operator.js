const { books } = require('./books.json');

// Rest Pattern and Parameters

// 4.1 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;

console.log(
  `The first book main keyword is "${mainKeyword}" and all other keywords is`,
  rest
);

// 4.2 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

console.log(
  `The second book publisher is "${bookPublisher}" and all other details of the book here `,
  restOfTheBook
);

/* 
    4.3 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

    Example:
    Code: printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
    Expected output: "The book "Algorithms" has 2 authors"
*/

const printBookAuthorsCount = (title, ...authors) => {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
