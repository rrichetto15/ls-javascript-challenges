// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let rl = require("readline-sync");

function prompt(message) {
  console.log(`${message}`);
}

prompt("Please enter an integer greater than 0:");
let number = Number(rl.question());

prompt(`Enter "s" to compute the sum, or "p" to compute the product:`);
let operation = rl.question();

let consecutiveIntegers = [];

for (let i = 1; i <= number; i++) {
  consecutiveIntegers.push(i);
}

if (operation === "s") {
  let sum = consecutiveIntegers.reduce((arr, cur) => arr + cur);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else {
  let product = consecutiveIntegers.reduce((arr, cur) => arr * cur);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
}

/*
Example 1:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.


Example 2
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/
