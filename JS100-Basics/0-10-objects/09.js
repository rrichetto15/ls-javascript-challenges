// Write code that starts from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};

nestedArray.forEach(elem => {
  obj[elem[0]] = elem[1];
})

console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }