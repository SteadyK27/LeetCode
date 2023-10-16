/*
* 자바 풀이 연습 
*/

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = nums.length;

        for (int i = 0; i < n; i += 1) {
            map.put(nums[i], i);
        }

        for (int i = 0; i < n; i += 1) {
            int complement = target - nums[i];

            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[]{i, map.get(complement)};
            }
        }

        return new int[]{};
    }
}