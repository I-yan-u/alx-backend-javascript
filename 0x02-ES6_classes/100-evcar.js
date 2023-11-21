/* eslint no-underscore-dangle: ["error", {"allow": ["_brand", "_motor", "_color", "_range"] }] */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // get [Symbol.species]() {
  //   return Car;
  // }

  cloneCar() {
    const Obj = super.constructor;// || super[Symbol.species];
    return new Obj();
  }
}
