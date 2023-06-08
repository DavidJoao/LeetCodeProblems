
//  1351
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

//  2619 
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
// If there are no elements in the array, it should return -1.
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


