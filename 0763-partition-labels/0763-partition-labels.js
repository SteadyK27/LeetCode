/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last=-1;
    const res=[];
    let left=0;
    for(let i=0;i<s.length;i++){
        last=Math.max(s.lastIndexOf(s[i]),last)
        if(i===last){
            res.push(i-left+1);
            left=i+1
        }
    }
    return res;
};
 
// var partitionLabels = function(s) {
//     const arr = s.split("");
//     const result = [];
    
//     for (let i = 0; i < arr.length; i += 1) {

//         const index = arr.lastIndexOf(arr[i]);
        
//         result.push(arr.slice(i, index + 1));
        
//         i = index;
//     }

//     const res = [];

//     for (i = result.length - 1; i >= 0; i -= 1) {
//         if (result[i].length === 1) {
//             for (j = 0; j < result.length; j += 1) {
//                 if (result[j].indexOf(result[i][0]) >= 0) {
//                     res.push(result.slice(j, i + 1));
//                     i = j;
//                     break;
//                 }
//             }
//         } else {
//             res.push(result[i]);
//             continue;
//         }
//     }

//     return res
//     .reverse()
//     .map((element) => 
//     element
//     .toString()
//     .split("")
//     .join("")
//     .replaceAll(",","")
//     .length);
// };