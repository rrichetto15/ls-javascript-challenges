// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

function count100(arr) {
  let count = 0;

  arr.forEach(num => {
    if (num >= 100) {
      count += 1;
    }
  })

  return count;
}

console.log(count100(scores));