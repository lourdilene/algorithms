/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  filteredArr = [];
  arr.forEach((element, index) => {
    value = fn(element, index);
    if (value) {
      filteredArr.push(element);
    }
  });
  return filteredArr;
};
