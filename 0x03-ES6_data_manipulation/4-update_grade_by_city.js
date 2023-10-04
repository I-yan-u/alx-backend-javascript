export default function updateStudentGradeByCity(students, location, grade) {
  const filtObj = students.filter((objs) => objs.location === location);
  return filtObj.map((obj) => {
    const newObj = obj;
    newObj.grade = 'N/A';
    for (const grades of grade) {
      if (grades.studentId === newObj.id) {
        newObj.grade = grades.grade;
      }
    }
    return newObj;
  });
}
