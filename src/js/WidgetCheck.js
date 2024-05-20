import getSystem from './getSystem';
import luhnCheck from './luhnCheck';
import getNumber from './getNumber';

export default class WidgetCheck {
  constructor() {
    this.container = null;
    this.system = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  init() {
    this.inputNumber = this.container.querySelector('.input_number');
    this.btn = this.container.querySelector('.validate');
    this.iconsArray = Array.from(this.container.querySelectorAll('.icon'));
    this.check = this.container.querySelector('.check');
  }

  listeners() {
    this.inputNumber.addEventListener('keyup', () => {
      this.check.textContent = '';
      if (getSystem(this.inputNumber.value)) {
        this.system = getSystem(this.inputNumber.value);
        this.activateSystem(getSystem(this.inputNumber.value)[0]);
      } else {
        this.iconsArray.forEach((icon) => {
          // eslint-disable-next-line no-param-reassign
          icon.className = 'icon';
        });
      }
    });

    this.inputNumber.addEventListener('keyup', () => {
      if (getSystem(this.inputNumber.value)) {
        this.activateSystem(getSystem(this.inputNumber.value)[0]);
      } else {
        this.iconsArray.forEach((icon) => {
          // eslint-disable-next-line no-param-reassign
          icon.className = 'icon';
        });
      }
    });

    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cardNumber = getNumber(this.inputNumber.value);
      if (!this.system) {
        alert('Неизвестная платежная система');
      } else if (cardNumber.length === this.system[1]) {
        if (luhnCheck(cardNumber)) {
          this.check.textContent = '✔';
        } else {
          this.check.textContent = '✖';
        }
      } else {
        alert(`Введите ${this.system[1]}-значный номер карты`);
      }
    });
  }

  activateSystem(name) {
    this.iconsArray.forEach((icon) => {
      if (icon.id === name) {
        // eslint-disable-next-line no-param-reassign
        icon.className = 'icon';
      } else {
        // eslint-disable-next-line no-param-reassign
        icon.className = 'icon icon_shade';
      }
    });
  }
}
