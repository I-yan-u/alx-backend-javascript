export default function getStudentsByLocation(studentList, location) {
  return studentList.filter((obj) => obj.location === location);
}
