/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length == 1 || !k) {
      return
  }
  for (var i = 0; i < k; i++) {
      var tem = nums.pop() 
      nums.unshift(tem)
  }
};
