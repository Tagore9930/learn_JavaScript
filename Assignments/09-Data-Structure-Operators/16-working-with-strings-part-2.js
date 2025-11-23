const { books } = require('./books.json');

// Working with Strings - Part 2

/*
    16.1 Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

    You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

    Example
    Code: normalizeAuthorName('  JuliE sussMan (Contributor)')
    Expected output: "Julie Sussman"
*/

function normalizeAuthorName(author) {
  const removedContributor = author.replace('(Contributor)', '').trim();
  const firstNameLetter = removedContributor[0].toUpperCase();
  const lastNameLetterIndex = removedContributor.lastIndexOf(' ') + 1;
  const lastNameLetter = removedContributor[lastNameLetterIndex];
  const finalName =
    firstNameLetter +
    removedContributor
      .replace(lastNameLetter, lastNameLetter.toUpperCase())
      .slice(1);

  console.log(
    `16.1: '  JuliE sussMan (Contributor)' -- The first name and last name are capitalized, and the "(Contributor)" part is removed (if exists), from given string: ${finalName}`
  );
}

normalizeAuthorName('  JuliE sussMan (Contributor)');

/*
    16.3 Write a function called logBookTheme that takes book's title (string), and logs to the console:

    "This book is about computers" if the title starts with the word "computer",

    "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

    and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
*/

function logBookTheme(title) {
  title = title.toLowerCase();
  if (title.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (title.includes('algorithms') && title.includes('structures')) {
    console.log('This book is about algorithms and data structures');
  } else if (
    (title.endsWith('system') || title.endsWith('systems')) &&
    !title.includes('operating')
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
}

console.log('16.2:');

for (const book of books) {
  logBookTheme(book.title);
}
