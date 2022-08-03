// const s: string = "hello world!";
// console.log(s);

/*
Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.

Example 1:

  Input: s = "()"
  Output: true

Example 2:
  
  Input: s = "()[]{}"
  Output: true


Example 3:

  Input: s = "(]"
  Output: false
*/


const closingBraces = (value: string): boolean => {
    const compare: Record<string, string> = {
      '{': '}',
      '[': ']',
      '(': ')',
      '<': '>',
      'O': 'o',
    };
  
    let stack: string[] = [];
  
    const s = value.split('');
  
    if (s.length === 1) {
      return false;
    }
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] in compare) {
        stack.push(s[i]);
      } else if (Object.values(compare).indexOf(s[i]) !== -1) {
        const last = stack[stack.length - 1];
        if (compare[last] === s[i]) {
          stack.pop();
        }
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(closingBraces('({<>})'), 'test case'); // return true
  
  
  const cases = [
    {
      testCase: '()',
      expected: true,
    },
    {
      testCase: ')(',
      expected: false,
    },
    {
      testCase: '(){}',
      expected: true,
    },
    {
      testCase: '({[]})',
      expected: true,
    },
    {
      testCase: '[][][][][][][[]][',
      expected: false,
    },
    {
      testCase: '({}[})',
      expected: false,
    },
    {
      testCase: '({<>})',
      expected: true,
    },
    {
      testCase: '({Oo})',
      expected: true,
    }
  ]
  
  const tester = (recived, expected, testCase) => {
    if (recived === expected) {
      console.log("Test Passed!")
    } else {
      console.log(`Fail. Expected ${expected} for ${testCase} but recived ${recived}`)
    }
  }
  
  const testRunner = (func) => {
    cases.forEach(aCase => {
      const { testCase, expected } = aCase;
      const recived = func(testCase);
      tester(recived, expected, testCase)
    })
  }
  
  
  
  testRunner(closingBraces)