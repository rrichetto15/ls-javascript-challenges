// Write a while loop that logs all odd natural numbers between 1 and 40.

let num = 1;

while (num <= 40) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num += 1;
}