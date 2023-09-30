/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_lenght", "_students"] }] */
export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() { return this._name; }

  get lenght() { return this._lenght; }

  get students() { return this._students; }

  set name(Name) {
    if (typeof Name === 'string') {
      this._name = Name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set lenght(lent) {
    if (typeof lent === 'number') {
      this._lenght = lent;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(Students) {
    if (typeof Students === 'object') {
      for (const Student of Students) {
        if (typeof Student !== 'string') {
          throw new TypeError('Student must be an array of strings');
        }
      }
    } else {
      throw new TypeError('Student must be an array');
    }
    this._students = Students;
  }
}
