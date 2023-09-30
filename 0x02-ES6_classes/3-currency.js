/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_code"] }] */
export default class HolbertonCourse {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() { return this._code; }

  get name() { return this._name; }

  set code(Code) {
    this._code = Code;
  }

  set name(currency) {
    this._name = currency;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
