// Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.
// For example:

function catAge(humanYears) {
  let age = 0;

  for (let i = 1; i <= humanYears; i += 1) {
    if (i === 1) {
      age += 15;
    } else if (i === 2) {
      age += 9;
    } else if ( i > 2) {
      age += 4;
    }
  }

  return age;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32