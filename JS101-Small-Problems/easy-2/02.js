// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

const rl = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt('What is your name?');
let firstName = rl.question();

if (firstName.endsWith('!')) {
  console.log(
    `HELLO ${firstName
      .slice(0, firstName.length - 1)
      .toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${firstName}.`);
}

// Examples

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?
