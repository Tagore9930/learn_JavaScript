const { books } = require('./books.json');

// Maps: Iteration

/*
    14.1 Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
*/

const firstBookMap = new Map(Object.entries(books[0]));

console.log("14.1 The first book object converted to Map from books array", firstBookMap);

/*
    14.2 Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.
*/

console.log("14.2 Print the map values if value type is number only:");


for (const [key, value] of firstBookMap) {
    if (typeof value === 'number') {
        console.log(`The ${key} key value type is number.`);
    }   
}

