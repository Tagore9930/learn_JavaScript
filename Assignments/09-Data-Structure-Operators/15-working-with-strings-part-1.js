const { books } = require('./books.json');

// Working with Strings - Part 1

/*
    15.1 Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.
*/

const firstBookISBN = books[0].ISBN;

console.log(
  'The first book ISBN 6th, 4th, 9th, 8th digits is',
  firstBookISBN[5],
  firstBookISBN[3],
  firstBookISBN[8],
  firstBookISBN[7]
);

/*
    15.2 Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

    const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
*/

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(`Quote: ${quote}`);

console.log(`The chess word index is ${quote.indexOf('chess')} in above quote`);

/*
    15.3 Extract the word "boxing" from the same quote string, and log it to the console.
*/

console.log(
  `Extract the word "boxing" from the same quote string: ${quote.slice(-6)}`
);

/*
    15.4 Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

    Example 1
    Code: isContributor('Julie Sussman (Contributor)');
    Expected output: true

    Example 2
    Code:isContributor('Robert Sedgewick');
    Expected output: false
*/

const isContributor = author => {
  // My code:
  //   const contributorText = author.slice(author.lastIndexOf(' ') + 1);
  //   return contributorText === '(Contributor)' ? true : false;

  // Exepected code:
  return author.indexOf('(Contributor)') !== -1;
};

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));
