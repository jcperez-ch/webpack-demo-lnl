const fruits = require('./fruits');

const pick = fruit => fruits[fruit];

console.log(`I've chosen ${pick('tomato')}`);
