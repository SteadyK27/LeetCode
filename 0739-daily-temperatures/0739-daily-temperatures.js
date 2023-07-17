/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let left = 0;
    let right = 1;
    const result = [];

    for (let i = 0; i < temperatures.length; i += 1) {
        while (right < temperatures.length) {
            if (temperatures[left] < temperatures[right]) {
               result.push(right - left);
               break;
            } else {
               right++;
               if (right === temperatures.length) {
                   result.push(0);
               }
            }
       }
        right = ++left;
    }

    return result;
};