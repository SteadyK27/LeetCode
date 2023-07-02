/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 접근 방식: 자료구조 map으로 해결하기
    // 시간 복잡도: O()
    // 공간 복잡도: O()

    const ransomNoteMap = new Map();
    const magazineMap = new Map();

    for (let i = 0 ; i < ransomNote.length; i += 1) {
        if (!ransomNoteMap.has(ransomNote[i])) {
            ransomNoteMap.set(ransomNote[i], 1);
        } else {
            ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) + 1);
        }
    }

    for (let i = 0 ; i < magazine.length; i += 1) {
        if (!magazineMap.has(magazine[i])) {
            magazineMap.set(magazine[i], 1);
        } else {
            magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
        }
    }
    
    if (ransomNoteMap.size > magazineMap.size) return false;
    
    for (let i = 0;  i < ransomNoteMap.size; i += 1) {
        let letter = ransomNote[i];

        if (!magazineMap.has(letter)) return false;
        if (magazineMap.has(letter) && magazineMap.get(letter) < ransomNoteMap.get(letter)) {
            return false;
        }
    }

    return true;
};