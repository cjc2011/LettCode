/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var first = nums[0]
  nums.sort()
  var index = nums.indexOf(first)
  if (index > -1) {
    return nums.length - 1 - index
  }
  return -1
};