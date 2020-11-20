// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

/**
 * Problem
 * input: string
 * output: string
 * rules:
 *  - convert every number WORD into an actual number
 *
 * Data Structure
 *  - array
 *
 * Algorithm
 *  - set and array of numberWords to the number words 'zero' through 'nine'
 *  - split the the given string into an array
 *  - for each word in the array
 *    - if the numberWords array contains the word
 *      - get the index of that word in the numberWords array
 *      - then change that word to the corresponding number
 *  - join the array back into a string
 *  - return the string
 */

const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
