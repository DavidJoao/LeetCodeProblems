// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

var countNegatives = function(grid) {
    let newGrid = grid.flat(grid.length);  
    let negativeArray = [];
    newGrid.forEach(number => {
        if (number < 0) negativeArray.push(number)
    });
    
    return negativeArray.length;
};