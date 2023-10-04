export default function hasValuesFromArray(set, array) {
  let bool = false;
  array.map((x) => {
    bool = set.has(x);
    return bool;
  });
  return bool;
}
