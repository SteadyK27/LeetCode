/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 접근 방식: 두 가지 생각, 이전 TwoSum 풀이 방식과 중복이 배열이 많을 것 같아서 DP로 방식으로 접근
    // 시간 복잡도: O(n^2);
    // 공간 복잡도: O(1);
    // 풀어 볼 것

    const results = [];

    if (nums.length < 3) return results;

    nums = nums.sort((a, b) => a - b);

    const target = 0;

    for (let i = 0; i < nums.length - 2; i += 1) {
        if (nums[i] > target) break;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === target) {
                results.push([nums[i], nums[j], nums[k]]);
                
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return results;
};