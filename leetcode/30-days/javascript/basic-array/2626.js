/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  val = init;
  if (nums.length == 0) {
    return val;
  }
  nums.forEach((element) => {
    val = fn(val, element);
  });
  return val;
};
