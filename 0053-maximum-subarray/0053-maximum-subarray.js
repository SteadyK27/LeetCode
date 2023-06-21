/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxNum = nums[0];

    for (let i = 1; i < nums.length; i += 1) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];

        if (maxNum < nums[i]) {
            maxNum = nums[i]
        }
    }

    return maxNum;
};