//  1351
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

var countNegatives = function (grid) {
   let newGrid = grid.flat(grid.length)
   let negativeArray = []
   newGrid.forEach(number => {
      if (number < 0) negativeArray.push(number)
   })

   return negativeArray.length
}

//  2619
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
// If there are no elements in the array, it should return -1.
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

Array.prototype.last = function () {
   return this.length === 0 ? -1 : this[this.length - 1]
}

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
   return new Promise(resolve => setTimeout(resolve, millis))
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

var maximumCount = function (nums) {
   let positiveNums = []
   let negativeNums = []
   nums.forEach(num => {
      if (num > 0) {
         positiveNums.push(num)
      } else if (num < 0) {
         negativeNums.push(num)
      } else if (num === 0) {
         let zeroArray = nums.filter(num => num === 0)
         if (zeroArray.length === 0) {
            positiveNums.push(num)
         } else if (zeroArray.length >= 1) {
         }
      }
   })

   return positiveNums.length > negativeNums.length ? positiveNums.length : negativeNums.length
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
   // First start iterating over array
   for (let i = 0; i < nums.length; i++) {
      // Then for each number in array, we will iterate again to check next number
      for (let j = i + 1; j < nums.length; j++) {
         // For each of i Iteration, we will iterate all j, so check if i + j === target
         if (nums[i] + nums[j] === target) return [i, j]
      }
   }
}

//  26
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function (nums) {
   if (nums.length === 0) {
      return 0 // If the array is empty, there are no unique elements
   }

   let k = 1 // Initialize the count of unique elements to 1 (assuming at least one element is present)

   for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
         nums[k] = nums[i] // Update the next unique element in the array
         k++ // Increment the count of unique elements
      }
   }

   return k
}

//      27
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
// The remaining elements of nums are not important as well as the size of nums.

// Return k.

var removeElement = function(nums, val) {
    const filteredArray = nums.filter(numbers => numbers !== val)
    // We want to return modified nums instead of new Array
    nums.length = filteredArray.length;
    filteredArray.forEach((number, index) => {
        nums[index] = filteredArray[index]
    })

    return nums.length
};

//      28
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    const result = haystack.indexOf(needle);
    return result === undefined ? -1 : result;
};

//      58
// Given a string s consisting of words and spaces, return the length of the last word in the string.

var lengthOfLastWord = function(s) {
    const stringArray = s.trim().split(' ')
    return (stringArray[stringArray.length - 1].length)
};