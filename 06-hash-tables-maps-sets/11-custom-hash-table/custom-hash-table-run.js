const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

// const result = myHashTable._hash('John', myHashTable.limit);

myHashTable.set('John', '555-234-3455');
myHashTable.set('James', '555-349-3948');
myHashTable.set('Sara', '555-323-9650');

myHashTable.remove('James');

// console.log(myHashTable.get('James'));
// console.log(myHashTable.has('James'));

myHashTable.clear();

myHashTable.printTable();

// console.log(result);
