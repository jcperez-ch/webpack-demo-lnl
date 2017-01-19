const colors = require('../colors');

const tomato = {
  name: 'tomato',
  shape: 'round',
  color: colors.red,
  toString: function() {
    return `I am a ${this.shape} shaped ${this.name} dressed in ${this.color}`;
  }
};

module.exports = tomato;
