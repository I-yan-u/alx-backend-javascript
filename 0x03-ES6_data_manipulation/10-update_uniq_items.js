export default function updateUniqueItems(mapData) {
  if (Object.getPrototypeOf(mapData) !== Map.prototype) throw new TypeError('Cannot process');
  return mapData.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
