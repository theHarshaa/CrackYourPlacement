// Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 
var exist = function(board, word) {
    const M = board.length;
   const N = board[0].length;
   
   const path = new Set();
   
   function backtrack(r,c,idx){
       
       if(idx === word.length) return true;
       if(r < 0 || c < 0 || r >= M || c >= N) return false;
       if(board[r][c] !== word.charAt(idx)) return false;
       
       const arrStr = `${r}|${c}`;
       if(path.has(arrStr)) return false;
       
       path.add(arrStr);
       const found = 
             backtrack(r+1, c, idx+1) ||
             backtrack(r-1,c,idx+1) || 
             backtrack(r,c+1, idx+1) ||               
             backtrack(r,c-1, idx+1);
       path.delete(arrStr);            
       return found;
   
   }
  
   
   for(let i = 0; i<M; i++){
       for(let j = 0; j<N; j++){
           if(board[i][j] === word.charAt(0))
               if(backtrack(i,j,0)) return true;        
       }
   }
   
   return false;
};