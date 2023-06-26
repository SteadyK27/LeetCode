/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var kClosest = function(points, K) {
    points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))

    return points.slice(0,K)
};

// var kClosest = function(points, k) {
//     // time : O(Nlog(N))
//     // space : O(N)
//     const distance = [];
   
//     for (let i = 0; i < points.length; i += 1) {
//         distance.push(points[i][0] ** 2 + points [i][1] ** 2);
//     }

//     console.log(points.map((_, index)=> index));
//     const indexArray = points.map((_, index)=> index).sort((a, b) => distance[a] - distance[b]);
//     const result = indexArray.map((index) => points[index]);

//     return result.slice(0, k);
// };