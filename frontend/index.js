import sample from 'lodash/sample';
import fruits from './fruits';

import appStyles from './styles.less';

const app = (fruit) => `
<div class="app-container">
  <h1>Webpack Demo</h1>
  <p>${fruit}</p>
  <footer>Developed by JC</footer>
</div>
`;

const render = (el, component) => {
  el.innerHTML = component(sample(fruits));
}

render(document.getElementById('app'), app);
