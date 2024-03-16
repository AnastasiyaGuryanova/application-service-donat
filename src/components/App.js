import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $heading = document.createElement('h1');
    $heading.className = 'total-amount';
    $heading.textContent = 'Итого: $';
    
    const $span = document.createElement('span');
    $span.textContent = this.state.total;

    $heading.append($span);
    this.$rootElement.append($heading);

    this.$total = $span;
    
    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this),
    });
    this.$rootElement.appendChild(donateForm.$rootElement);

    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({
      amount, 
      onClick: this.onItemDelite.bind(this),
    });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelite() {
    const item = event.target.closest('.donate-item');
    item.remove();
    this.state.donates = this.state.donates.filter((item) => {
      if (item.state.id == event.target.id) this.state.total -= item.state.amount;
      return item.state.id != event.target.id;
    })
    this.$total.textContent = this.state.total;
  }
}
