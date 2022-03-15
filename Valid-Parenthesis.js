/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

*/

const isValid = (s) => {
    if (s.length === 1) {
        return false;
    }

    const stack = [];

    const order = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    const string = s.split('');
  
    string.forEach(element => {
        if (element === '{' || element === '(' || element === '[') {
            stack.push(element);
        } else if (element === '}' || element === ')' || element === ']') {
            if (order[stack[stack.length - 1]] === element) {
                stack.pop();
            } else {
                stack.push(element);
            }
        }
    });
    return stack.length === 0;
};