// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';
let array = string.split(' ');
let arrayCap = [];

array.forEach(elem => {
  arrayCap.push(elem[0].toUpperCase() + elem.slice(1));
})

let newStr = arrayCap.join(' ');

console.log(newStr);