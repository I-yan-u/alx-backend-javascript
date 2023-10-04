interface Student{
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const stu1: Student = {firstName: "Dans", lastName: "Jecop", age: 30, location: "Lagos"};
const stu2: Student = {firstName: "Screl", lastName: "Layo", age: 30, location: "Lagos"};

const stuArray: Student[] = [stu1, stu2];

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

stuArray.forEach((objectList) => {
  const tableName = document.createElement('tableName');
  const tableRow = document.createElement('tableRow');
  const tableLocation = document.createElement('tableLocation');

  tableName.textContent = objectList.firstName;
  tableLocation.textContent = objectList.location;
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableLocation);
  student_body.appendChild(tableRow);
})

student_table.appendChild(student_body);
document.body.appendChild(student_table);
