// Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
 

var setZeroes = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(matrix[i][j]==0){
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(dummyRow[i] == 0 || dummyCol[j] == 0 ){
                matrix[i][j]=0;
            }
        }
    }
};
