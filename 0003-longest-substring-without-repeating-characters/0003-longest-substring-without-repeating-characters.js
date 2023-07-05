/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

// var lengthOfLongestSubstring = function(s) {
//   // 접근 방식: DP로 축적하면서 풀수 있지 않을까라 생각
//   // 시간 복잡도:
//   // 공간 복잡도:
    
// };