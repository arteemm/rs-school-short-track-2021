/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');
  /* eslint-disable no-param-reassign */
  const sum = a.reduce((acc, x) => {
    for (let i = 0; i <= b.length - 1; i++) {
      if (x === b[i]) {
        acc += 1;
        b.splice(i, 1);
        break;
      }
    }
    return acc;
  }, 0);
  /* eslint-enable no-param-reassign */
  return sum;
}

module.exports = getCommonCharacterCount;
