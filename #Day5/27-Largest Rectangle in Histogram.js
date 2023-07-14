// Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4
 

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

var largestRectangleArea = function(heights) {
    const n = heights.length;
    const nsr = new Array(n).fill(0);
    const nsl = new Array(n).fill(0);

    const stack = [];
        
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
                stack.pop();
        }
        if (stack.length === 0) {
            nsr[i] = n;
        } else {
            nsr[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    while (stack.length !== 0) {
        stack.pop();
    }

    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            nsl[i] = -1;
        } else {
             nsl[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (nsr[i] - nsl[i] - 1));
    }
   
    return ans;
};