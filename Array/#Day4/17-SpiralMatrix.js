// Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

var spiralOrder = function(matrix) {
    let result = [];
  while (matrix.length > 0) {
    if (matrix.length !== 0) {
      for (let i = 0; i < matrix[0].length && matrix[0].length > 0; i++) {
        result.push(matrix[0][i]);
      }
      matrix.splice(0, 1);
    }
    // ↑ pushes the first array in matrix to result and removes it from matrix 
    if (matrix.length !== 0) {
      for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][matrix[i].length - 1]);
        matrix[i].pop();
      }
    }
    // ↑ pushes the last element of the arrays in matrix to result and removes it from matrix
    if (matrix.length !== 0) {
      for (let i = matrix[matrix.length - 1].length; i > 0; i--) {
        result.push(matrix[matrix.length - 1].pop());
      }
      matrix.splice(matrix.length - 1, 1);
    }
    // ↑ pushes the last array in matrix to result and removes it from matrix
    if (matrix.length !== 0) {
      for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[i].shift());
      }
    }
    // ↑ pushes the first element of the arrays in matrix to result and removes it from matrix
  }
  return result.filter((a) => a !== undefined);
};