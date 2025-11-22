const { books } = require('./books.json');

// Sets

/*
    12.1 Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

    Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

*/

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book?.keywords);
}

console.log('12.1 The all keywords from books array', allKeywords);

/*
    12.2 The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.
*/

const uniqueKeywords = new Set(allKeywords);

console.log('12.2 The uniqueKeywords from allKeywords', uniqueKeywords);

/*
    12.3 Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
*/

uniqueKeywords.add('coding');
uniqueKeywords.add('science');

console.log('12.3 The newly added 2 keys in uniqueKeywords', uniqueKeywords);

/*
    12.4 Delete 'business' from the uniqueKeywords set.
*/

uniqueKeywords.delete('business');
console.log(
  "12.4 The 'business' keyword is removed from uniqueKeywords",
  uniqueKeywords
);

/*
    12.5 Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
*/

const uniqueKeywordsArr = [...uniqueKeywords];

console.log(
  '12.5 The uniqueKeywords set is converted to array',
  uniqueKeywordsArr
);

/*
    12.6 Delete all items from the uniqueKeywords set.
*/

uniqueKeywords.clear();

console.log('12.6 The uniqueKeywords is deleted all keywords', uniqueKeywords);
