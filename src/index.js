import { renderComponent } from '@glimmerx/core';
import Component, { hbs } from '@glimmerx/component';

class MyComponent extends Component {
  static template = hbs`<h1>Hello world</h1>`;
}

renderComponent(MyComponent, document.getElementById('app'));
