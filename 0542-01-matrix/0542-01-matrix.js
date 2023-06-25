/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 // var updateMatrix = function(mat) {
//   const copyMat = [...mat];

//   for (let i = 0; i < mat.length; i += 1) {
//     for (let j = 0; j < mat[0].length; j += 1) {
//       if (mat[j][i] === 0) continue;
//       mat[j][i] = explore(j, i, copyMat);
//     }
//   }

//   return mat;
// };

// const explore = function (row, col, mat) {
//   console.log("he");
//   if (row < 0 || col < 0 || row >= mat[0].length || col >= mat.length) return 999;
//   if (mat[row][col] === 0) return 1;
//   let nearestZero = 999;

//   mat[row][col] = 0;

//   nearestZero = Math.min(explore(row + 1, col, mat), nearestZero);
//   nearestZero = Math.min(explore(row, col + 1, mat), nearestZero);
//   nearestZero = Math.min(explore(row - 1, col, mat), nearestZero);
//   nearestZero = Math.min(explore(row, col - 1, mat), nearestZero);

//   return nearestZero;
// }

var updateMatrix = function(matrix) {
    let i, l, j, m;
    
    let q = [];        
    
    for (i = 0, l = matrix.length; i < l; i++) { 
        for ( j = 0, m = matrix[0].length; j < m; j++) {   
            if (matrix[i][j] === 0) {
                q.push([i, j, 0]);
            } else {
                matrix[i][j] = Infinity;
            }  
        } 
    }
    
    let dir = [[1,0],[0,1],[-1,0],[0,-1]];
    
    while (q.length) {
        let pos = q.shift();
        
        if (matrix[pos[0]][pos[1]] > pos[2]) {
            matrix[pos[0]][pos[1]] = pos[2];
        }

        dir.forEach(function(d) {
            let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];

            if (next[0] > -1 && next[0] < matrix.length && next[1] > -1 && next[1] < matrix[0].length) {
                if (matrix[next[0]][next[1]] === Infinity) {
                    q.push(next);
                }
            }
        });
    }
    return matrix;
};
