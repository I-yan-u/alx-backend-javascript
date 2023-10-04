export default function cleanSet(set, startstr) {
  const result = [];
  if (startstr === '' || typeof startstr !== 'string') return '';
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startstr)) {
      result.push(element.slice(startstr.length));
    }
  });
  return result.join('-');
}
