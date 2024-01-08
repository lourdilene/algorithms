function twoSum(nums: number[], target: number): number[] {
  let newArray: number[] = [];
  let sum: number;
  nums.forEach((num, index, nums) => {
    nums.forEach((num2, index2) => {
      sum = num + num2;
      if (sum === target && index !== index2) {
        newArray.push(index);
      }
    });
  });
  return newArray;
}
