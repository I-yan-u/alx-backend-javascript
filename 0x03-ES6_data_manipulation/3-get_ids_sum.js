export default function getStudentIdsSum(list) {
  const sumIDs = list.reduce((prev, cur) => prev + cur.id, 0);
  return sumIDs;
}
