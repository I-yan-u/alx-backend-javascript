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
    this._name = Name;
  }

  set lenght(lent) {
    this._lenght = lent;
  }

  set students(Students) {
    this._students = Students;
  }
}
