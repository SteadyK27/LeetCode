/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    // 접근 방식: 내장함수 사용
    // 시간 복잡도: O(n)
    // 공간 복잡도: O(1)
    return haystack.indexOf(needle);
};