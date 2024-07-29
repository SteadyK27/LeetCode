function findMaxConsecutiveOnes(nums: number[]): number {
    // appraoch: declare count and if "0" appear, reset count
    // time: O(n) 
    // space: O(1)
    
    let count = 0;
    let maxCount = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i]) {
            count++;
        } else {
            count = 0;
        }
        
        if (maxCount < count) {
            maxCount = count;
        }
    }
    
    return maxCount;
};