export default function getListStudentIds(studentArray) {
  if (Array.isArray(studentArray) === true) {
    return studentArray.map((obj) => obj.id);
  }
  return [];
}
