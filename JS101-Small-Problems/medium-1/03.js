// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

/**
 * input: number
 * output: number
 *
 * rules
 *  - rotate one digist
 *  - hold the first digit, and rotate the following
 *  - hold the first two digits, and rotate the following
 *  - repeat until finished
 *
 * Data Structure: String
 *
 * Algorithm
 * - Convert number into string
 * - Rotate the string
 * - For each remaining index in the string...
 *    - hold the first 'index' character
 *    - rotate the remaining characters
 * - return the final maximum rotation
 */

function maxRotation(number) {
  let numStr = String(number);

  let firstRotation = rotate(numStr);
  let newStr = firstRotation;

  for (let i = 1; i < firstRotation.length; i++) {
    newStr = newStr.slice(0, i) + rotate(newStr.slice(i));
  }

  return Number(newStr);
}

function rotate(str) {
  return str.slice(1) + str[0];
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
