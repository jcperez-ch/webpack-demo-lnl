const assign = require('lodash/assign');

const cucumber = require('./cucumber');
const tomato = require('./tomato');

function toString() {
  return `I am a ${this.shape} shaped ${this.name} dressed in ${this.color}`;
}

module.exports = {
  cucumber: assign(cucumber, { toString }),
  tomato: assign(tomato, { toString }),
};
