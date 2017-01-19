import assign from 'lodash/assign';

import { cucumber } from './cucumber';
import { tomato } from './tomato';

function toString() {
  return `I am a ${this.shape} shaped ${this.name} dressed in ${this.color}`;
}

export default {
  cucumber: { ...cucumber, toString },
  tomato: { ...tomato, toString },
};
