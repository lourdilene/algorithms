/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const value = x.toString();
  let invertedString = value.split("").reverse().join("");
  let invertedNumber = parseInt(invertedString);
  if (x === invertedNumber) return true;
  return false;
};
