const { books } = require('./books.json');

// Looping Objects: Object Keys, Values and Entries.

/*
    11.1 Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

    In the end, the entries array should be filled with arrays containing keys:

    [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]

*/

const entries = [];

for (const key of Object.keys(books[0]?.thirdParty?.goodreads)) {
  entries.push([key]);
}

console.log('11.1 The first book goodreads object keys', entries);

/*
    11.2 The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

    Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

    Push each value to the appropriate inner array in the entries array (use index from entries()).
*/

// console.log(Object.values(books[0].thirdParty.goodreads).entries());
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}
console.log("11.2 Assigned key values with Object.values() method in entries:", entries);


/*
    11.3 Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.
*/

const entries2 = Object.entries(books[0]?.thirdParty?.goodreads);

console.log("11.3 The entries2 values", entries2);


/*
    11.4 Log the entries and entries2 variables to the console, and compare them. They should look the same.
*/

console.log(entries, entries2);
  