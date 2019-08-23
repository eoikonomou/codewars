// Vowel Count

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowels = str.match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}

module.exports = getCount;
