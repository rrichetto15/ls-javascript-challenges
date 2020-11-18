// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

let rl = require("readline-sync");

function prompt(message) {
  console.log(`${message}`);
}

prompt("What is the bill?");
let bill = Number(rl.question());

prompt("What is the tip percentage?");
let tipPercent = Number(rl.question());

let tip = bill * (tipPercent / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

/*
Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/
