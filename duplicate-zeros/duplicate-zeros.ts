/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    // appraoch: iterate number Array and shift number after zero.
    // time: O(n^2)
    // space: 
    
    const arrayLength = arr.length;
    
    for(let i = 0; i < arr.length; i += 1) {
        const num = arr[i];
        
        if (num === 0) {
            for (let j = arrayLength - 1; j > i; j -= 1) {
                arr[j] = arr[j - 1];
            }
            i += 1;
        
    }
  }
}