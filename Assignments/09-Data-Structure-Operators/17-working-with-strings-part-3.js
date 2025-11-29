const { books } = require('./books.json');

// Working with Strings - Part 3

/*
    17.1 Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

    Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

    Example Code:
        const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
        logBookCategories(bookCategories);
        
    Expected output:
        science
        computing
        computer science
        algorithms
        business
        operating systems
        networking
        electronics
*/

console.log('17.1 Answer:');

function logBookCategories(categoriesString) {
  const categories = categoriesString.split(';');
  for (const [index, cate] of categories.entries()) {
    console.log(`${index + 1}: ${cate}`);
  }
}

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

/*
    17.2 Now, the opposite. Each book from the books array has the keywords property.

    Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

    Example Code:
        getKeywordsAsString(books);
    
    Expected output:
        computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development
*/

console.log('\n17.2 Answer:');

function getKeywordsAsString(booksArr) {
  let keywordsArr = [];
  for (const { keywords } of booksArr) {
    keywordsArr.push(...keywords);
  }

  const uniqueArr = [...new Set(keywordsArr)];
  console.log(uniqueArr.join(';'));
}

getKeywordsAsString(books);

/*
    17.3 Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

    Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

    Use the padEnd method.

    Example Code:
        const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
        logBookChapters(bookChapters);

    Expected output:
        The Basics__________ 14
        Sorting_____________ 254
        Searching___________ 372
        Graphs______________ 526
        Strings_____________ 706
*/

console.log('\n17.3 Answer:');

function logBookChapters(bookChaps) {
  for (const [chapName, page] of bookChaps) {
    console.log(`${chapName.padEnd(20, '_')} ${page}`);
  }
}

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);