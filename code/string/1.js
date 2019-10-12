/**
 * 两数之和
 * @param {*} nums [1,2,3,4]
 * @param {*} target 3
 * @returns [0,1]
 */
var twoSum = function(nums, target) {
  var len = nums.length;
  var results = [];
  if (len < 1) return;
  for (var i = 0; i < len; i++) {
    var a = nums[i];
    var result = target - a;
    var newNums = nums.slice(i+1);
    var index = newNums.indexOf(result);
    if (index > -1) {
      results = [i, i + index + 1];
      break;
    }
  }
  return results;
};