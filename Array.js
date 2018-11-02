// 给定一个整数数组，判断是否存在重复元素。
var containsDuplicate = function(nums) {
    var obj = {} 
    var result = nums.some(function(item) {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            return true
        }
    })
    return result
};

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素
var singleNumber = function(nums) {
    var num = null
    nums.forEach(function(item){
       if(nums.indexOf(item) == nums.lastIndexOf(item)) num =item ;
    })
    return num
};

//去除数组重复
function unique(a) {
    var res = a.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    });
    return res;
}

function unique(a) {
    return Array.from(new Set(a));
}

//给定两个数组，编写一个函数来计算它们的交集。
//nums1 = [1,2,2,1], nums2 = [2,2] =====> [2,2]
//nums1 = [4,9,5], nums2 = [9,4,9,8,4] ====> [4,9]


