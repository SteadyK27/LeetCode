/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // 접근 방식: 숫자를 합쳐서 비교
    // 시간 복잡도: O(nlogn)
    // 공간 복잡도: O(1)

    let result = "";

    nums
    .sort(function (a, b) {
        return `${b}${a}` - `${a}${b}`;
    })
    .forEach((el) => result += el);

    return result[0] === "0" ? "0" : result;
};