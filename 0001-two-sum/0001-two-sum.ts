function twoSum(nums: number[], target: number): number[] {
    // approach: 자료구조 Map을 사용하여 접근
    // time complexity: O(n)
    // space complexity: O(n)

    const map = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }

    return [-1, -1];
};