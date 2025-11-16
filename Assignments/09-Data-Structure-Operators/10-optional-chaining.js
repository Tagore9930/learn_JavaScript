const { books } = require('./books.json');

// Optional Chaining (?.)

/*
    10.1 Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

    Example 1:
    Code: getFirstKeyword(book[0]);
    Expected output: "computer science"

    Example 2:
    Code: getFirstKeyword(newBook2); // from previous tasks
    Expected output: undefined
*/

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages: 880,
};

function getFirstKeyword(book) {
  return book?.keywords?.[0];
}

console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));
