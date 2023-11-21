const fs = require('fs');

function analyze (field, list) {
  const student = [];
  let studentStr = '';
  list.forEach(stud => {
    if (stud[stud.length - 1] === field) {
      student.push(stud[0]);
    }
  });
  for (let i = 0; i < student.length - 1; i++) {
    studentStr += student[i] + ',' + ' ';
  }
  studentStr += student[student.length - 1];

  return [studentStr, student.length];
}

function checkField (studentList, index) {
  return studentList[index];
}

function countStudents (filename) {
  const fields = [];
  const studentsList = [];

  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) throw new Error('Cannot load the database');
    else {
      const students = data.split('\n');
      students.shift();
      const len = students.length;
      console.log(`Number of students: ${len}`);

      students.forEach(student => {
        const studentList = student.split(',');
        studentsList.push(studentList);
        const field = checkField(studentList, studentList.length - 1);
        if (!fields.includes(field)) {
          fields.push(field);
        }
      });
      fields.forEach(field => {
        const [res, len] = analyze(field, studentsList);
        console.log(`Number of students in ${field}: ${len}. List: ${res}`);
      });
    }
  });
}

module.exports = countStudents;
