import assign from 'lodash/assign';

import { cucumber } from './cucumber';
import { tomato } from './tomato';

import fruitStyles from './styles.scss';

function toString() {
  return `<article class="fruit">
    I am a
    <strong>${this.shape}</strong>
    shaped <em>${this.name}</em> dressed in
    <span style="color:${this.color}">${this.color}</span>
  </article>`;
}

export default {
  cucumber: { ...cucumber, toString },
  tomato: { ...tomato, toString },
};
