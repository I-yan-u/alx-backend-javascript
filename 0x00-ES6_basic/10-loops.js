export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let words of array) {
    words = appendString + words;
    newArray.push(words);
  }
  return newArray;
}
