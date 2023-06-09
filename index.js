
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


//  2621
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

async function sleep(millis) {
    return new Promise (resolve => setTimeout(resolve, millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


//  2529
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

var maximumCount = function(nums) {
    let mySet = new Set(nums)
    let numsArray = Array.from(mySet);
    let newNums = [];
    numsArray.forEach(num => {
        if (num >= 0) {
            newNums.push(num)
        }
    })

    return newNums.length;

};