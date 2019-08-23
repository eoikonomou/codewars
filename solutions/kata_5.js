// Who likes it?

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  return `${names.slice(0, Math.min(2, names.length - 1)).join(', ')} and ${names.slice(Math.min(names.length - 1, 2)).length > 1 ? `${names.slice(Math.min(names.length - 1, 2)).length} others` : names[names.length - 1]} like this`;
}

module.exports = likes;
