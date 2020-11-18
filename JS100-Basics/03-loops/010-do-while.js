// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

// Snippet 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// Snippet 2
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);


// The first snippet won't even run through the loop once, because it does not meet the condition. The second loop will run at least once, because it is a do/while loop.