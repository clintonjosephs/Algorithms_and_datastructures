// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let newX = x.toString();
    let b = newX.split("").reverse().join("");
    
    console.log(newX);
    console.log(b);
    
    return newX === b;
};