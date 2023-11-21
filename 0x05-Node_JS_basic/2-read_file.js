const fs = require('fs');

function analyze(field, list) {
  let student = [];
  let student_str = '';
  list.forEach(stud => {
    if (stud[stud.length - 1] === field)
    student.push(stud[0]);
  });
  for (let i = 0; i < student.length - 1; i++) {
    student_str += student[i] + ',' + ' ';
  }
  student_str += student[student.length - 1];

  return [student_str, student.length];
}

function checkField(student_list, index) {
  return student_list[index];
}

function countStudents(filename) {
  let fields = [];
  let students_list = [];

  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) throw new Error('Cannot load the database');
    else {
      let students = data.split('\n');
      students.shift();
      let len = students.length;
      console.log(`Number of students: ${len}`);

      students.forEach(student => {
        let student_list = student.split(',');
        students_list.push(student_list);
        let field = checkField(student_list, student_list.length - 1);
        if (!fields.includes(field))
        fields.push(field);
      });
      fields.forEach(field => {
        const [res, len] = analyze(field, students_list);
        console.log(`Number of students in ${field}: ${len}. List: ${res}`);
      });
    }
  });
}

module.exports = countStudents;
