/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numb = n.toString();
  numb = numb.split('');
  let min = numb[0];
  for (let i = 1; i <= numb.length - 1; i++) {
    if (numb[i] < min) {
      min = numb[i];
    }
  }
  const index = numb.lastIndexOf(min);
  numb.splice(index, 1);
  numb = numb.join('');
  return +numb;
}

module.exports = deleteDigit;
