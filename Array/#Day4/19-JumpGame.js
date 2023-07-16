// Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

var canJump = function(nums) {
    // Base condition...
      if(nums.length <= 1)
          return true;
      // To keep the maximum index that can be reached...
      let maximum = nums[0];
      // Traverse all the elements through loop...
      for(let i = 0; i < nums.length; i++){
          //if there is no way to jump to next...
          // so we should return false...
          if(maximum <= i && nums[i] == 0) 
              return false;
          //update the maximum jump...    
          if(i + nums[i] > maximum){
              maximum = i + nums[i];
          }
          //maximum is enough to reach the end...
          if(maximum >= nums.length-1) 
              return true;
      }
      return false;     
  };