/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 접근 방식: 피보나치가 떠오르거나, DP로 풀면 어떨까라는 생각이 듦
    // 시간 복잡도: O(n)
    // 공간 복잡도: O(1)

    if (n < 2) return 1;

    let first = 1;
    let second = 1;
    let third = 0;

    for (let i = 2; i <= n; i += 1) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
};