import Component, { hbs, tracked } from '@glimmerx/component';

export default class App extends Component {
  @tracked count = 0;

  constructor() {
    super(...arguments);
    setInterval(() => {
      this.count++;
    }, 1000);
  }

  static template = hbs`
  <div>
    <h1>Hello world!</h1>
    <p>{{this.count}}</p>
  </div>`;
}
