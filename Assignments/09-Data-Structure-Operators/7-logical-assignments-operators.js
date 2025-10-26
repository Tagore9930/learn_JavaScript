const { books } = require('./books.json');

// Logical Assignments Operators

// 7.1 Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

for (let index = 0; index < books.length; index++) {
  books[index].edition ||= 1;
}

/*
    7.2 Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

    Use the &&= operator (tip: you may also need the ! operator)
*/

for (let index = 0; index < books.length; index++) {
  books[index].highlighted &&= !(
    books[index].thirdParty.goodreads.rating < 4.2
  );
}
