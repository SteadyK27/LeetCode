/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const arr = s
    .toLowerCase()
    .split("")
    .filter(el => el.charCodeAt() >= 97 && el.charCodeAt() <= 122
    || el.charCodeAt() >= 48 && el.charCodeAt() <= 57);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left]!==arr[right]) return false;
        
        left++;
        right--;
    }

    return true;
};