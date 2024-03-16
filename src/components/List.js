import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $heading = document.createElement('h2');
    $heading.className = 'donates-container__title';
    $heading.textContent = 'Список донатов';

    const $containerDonates = document.createElement('div');
    $containerDonates.className = 'donates-container__donates';

    this.$rootElement.append($heading, $containerDonates);
    this.$listContainer = $containerDonates;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}