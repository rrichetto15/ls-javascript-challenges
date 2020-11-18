// Create a function removeLastChar that takes a string as argument, and returns the string without the last character.

function removeLastChar(str) {
  return str.substring(0, str.length - 1)
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'