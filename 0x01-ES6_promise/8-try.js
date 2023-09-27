export default function divideFunction(numerator, denominator) {
  let result;
  try {
    result = numerator / denominator;
  } catch (e) {
    Error(e, 'cannot divide by 0');
  }
  return result;
}
