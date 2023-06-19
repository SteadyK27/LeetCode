/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const firstMap = new Map();
    const secondMap = new Map();

    for (let i = 0; i < s.length; i += 1) {
        if (firstMap.has(s[i])) {
            firstMap.set(s[i], firstMap.get(s[i]) + 1);
        } else {
            firstMap.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i += 1) {
        if (secondMap.has(t[i])) {
            secondMap.set(t[i], secondMap.get(t[i]) + 1);
        } else {
            secondMap.set(t[i], 1);
        }
    }

    const firstArr = [...firstMap].sort(function(a, b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 0;
        }
    });
    const secondArr = [...secondMap].sort(function(a, b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 0;
        }
    });;

    return firstArr.toString() === secondArr.toString();
};