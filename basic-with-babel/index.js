import sample from 'lodash/sample';
import fruits from './fruits';

const pick = fruit => fruits[fruit];

console.log(`I've chosen randomly ${sample(fruits)}`);
