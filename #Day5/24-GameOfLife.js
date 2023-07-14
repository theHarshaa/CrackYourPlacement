// Game of Life
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

// Example 1:


// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:


// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

var gameOfLife = function(board) {
    // Assign cells placeholder values if they need to change state
    for (let y = 0; y < board.length; ++y) {
        for (let x = 0; x < board[0].length; ++x) {
            let status = getCellStatus(board, x, y);
            board[y][x] = status;
        }
    }

    // Change cells with placeholder values to actual final value
    for (let y = 0; y < board.length; ++y) {
        for (let x = 0; x < board[0].length; ++x) {
            if (board[y][x] == -1) board[y][x] = 1; // 0 -> 1
            else if (board[y][x] == 2) board[y][x] = 0; // 1->0
        }
    }
};

let getCellStatus = function(board, x, y) {
    let neighborCount = getNeighborCount(board, x, y);
    let cellStatus = board[y][x];
    // If a cell goes 1->0, assign value 2. If cell goes 0->1, assign -1
    if (cellStatus === 1) {
        if (neighborCount < 2 || neighborCount > 3) cellStatus = 2;
    }
    else {
        if (neighborCount === 3)  cellStatus = -1;
    }
    return cellStatus;
};

let getNeighborCount = function(board, x, y) {
    let width = board[0].length;
    let height = board.length;
    let leftBound = 0;
    let rightBound = width-1;
    let bottomBound = 0;
    let topBound = height-1;
    let count = 0;
    // Assigning 2 to cells going 1->0 and -1 for cells going 0->1 allows us to just
    // test neighbors for being > 0
    if((x-1) >= leftBound &&  (y+1) <= topBound && board[y+1][x-1] >0) count += 1; // Diag up-left
    if((x+1) <= rightBound &&  (y+1) <= topBound && board[y+1][x+1] > 0) count += 1; // Diag up-right
    if((x-1) >= leftBound &&  (y-1) >= bottomBound && board[y-1][x-1] > 0) count += 1; // Diag down-left
    if((x+1) <= rightBound &&  (y-1) >= bottomBound && board[y-1][x+1] > 0) count += 1; // Diag down-right
    if((y+1) <= topBound && board[y+1][x] > 0) count += 1; // Up
    if((y-1) >= bottomBound && board[y-1][x] > 0) count += 1; // Down
    if((x+1) <= rightBound && board[y][x+1] > 0) count += 1; // Right
    if((x-1) >= leftBound && board[y][x-1] >  0) count += 1; // Left
    return count;
};