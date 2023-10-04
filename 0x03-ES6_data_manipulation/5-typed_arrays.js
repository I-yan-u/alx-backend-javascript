export default function createInt8TypedArray(length, position, number) {
  const typedArray = new ArrayBuffer(length);
  const int8view = new DataView(typedArray);
  if (position >= length) {
    throw Error('Position outside range');
  }
  int8view.setInt8(position, number);
  return int8view;
}
