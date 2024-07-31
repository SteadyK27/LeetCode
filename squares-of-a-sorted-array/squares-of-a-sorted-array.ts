function sortedSquares(nums: number[]): number[] {
    // appraoch: iterate each number and sort
    // time: O(n log n), because javascript sort api 
    // space: O(1)
    
    return nums
        .map((item) => item ** 2)
        .sort((a, b) => a - b);
};