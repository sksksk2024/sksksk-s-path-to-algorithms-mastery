const nameMap = new Map([
  [1, 'John'],
  [2, 'Jack'],
  [3, 'Jill'],
]);

const myFunction = () => {};
const myObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'my function'],
  [myObj, 'my object'],
]);

//  Get values
// console.log(nameMap.get(1));
// console.log(map2.get(myFunction));
// console.log(map2.get(myObj));

// Set value
nameMap.set(4, 'Mike');
nameMap.set(5, 'Sara');

// Check values

console.log(nameMap.has(1));
console.log(nameMap.has(10));

// Remove values
nameMap.delete(1);
console.log(nameMap.has(1));

// Get size
console.log(nameMap.size);

// Iterating over a map
for (let [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));

// Get keys
console.log(nameMap.keys());

// Get values
console.log(nameMap.values());

// Clear map
nameMap.clear();

console.log(nameMap.size);
