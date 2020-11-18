// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(num, str) {
  let fullString = '';

  for (let i = 1; i <= num; i += 1) {
    fullString += str;
  }

  return fullString;
}

console.log(repeat(3, 'ha')); // 'hahaha'
