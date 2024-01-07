/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let newArray = [];
  nums.forEach((num, index, nums) => {
    nums.forEach((num2, index2, nums2) => {
      sum = num + num2;
      if (sum == target) {
        console.log(sum, index2);
        newArray.push(index);
      }
    });
  });
  return newArray;
};
