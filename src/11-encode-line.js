/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let sum = 1;
  const array = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      sum++;
    } else {
      if (sum === 1) {
        array.push(arr[i]);
      } else {
        array.push(sum + arr[i]);
      }
      sum = 1;
    }
  }
  return array.join('');
}

module.exports = encodeLine;
