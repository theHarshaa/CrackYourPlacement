// Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

var validPalindrome = function(s) {
    
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
            continue;
        }

        return !!(isPalidrome(i + 1, j, s) || isPalidrome(i, j - 1, s));
    }

    return true;
};

const isPalidrome = (start, end, s) => {
    for (let i = start, j = end; i < j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;

};