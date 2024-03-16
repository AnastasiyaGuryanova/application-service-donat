import { Component } from '../core/Component';
import * as DateUtils from '../core/utils/date';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: DateUtils.getTodayDateAndTime(new Date()),
      amount: props.amount,
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const $item = document.createElement('div');
    $item.className = 'donate-item';
    $item.innerHTML = this.state.date + ` -&nbsp;<b>$${this.state.amount}</b>`;

    const $button = document.createElement('button');
    $button.textContent = 'Удалить';
    $button.id = this.state.id;
    $button.className = 'delete-button';
    $button.addEventListener('click', props.onClick);

    this.$rootElement.append($item, $button);
  }
}
