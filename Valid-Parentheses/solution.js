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