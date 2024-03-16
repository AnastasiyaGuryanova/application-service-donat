import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.textContent = 'Введите сумму в $';

    const $input = document.createElement('input');
    $input.className = 'donate-form__donate-input';
    $input.setAttribute('name', 'amount');
    $input.setAttribute('type', 'number');
    $input.setAttribute('max', '100');
    $input.setAttribute('min', '1');
    $input.setAttribute('required', 'required');
    $label.append($input);

    const $button =  document.createElement('button');
    $button.className = 'donate-form__submit-button';
    $button.setAttribute('disabled', 'disabled');
    $button.setAttribute('type', 'submit');
    $button.textContent = 'Задонатить';
  
    this.$rootElement.append($label, $button);

    this.$input = $input;
    this.$button = $button;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  get isValid() {
    return this.state.amount >= 1 && this.state.amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    if (this.isValid) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = '';
      this.$input.value = '';
    }
  }
}
