/* eslint no-underscore-dangle: ["error", {"allow": ["_amount", "_currency"] }] */
/* eslint-disable-next-line */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(Amount) {
    this._amount = Amount;
  }

  set currency(Currency) {
    this._currency = Currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
