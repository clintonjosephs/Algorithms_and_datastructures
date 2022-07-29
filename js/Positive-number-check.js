/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

const positiveNumber = (array) => {
  let b = 1;

  let newArray = array.sort((x, b) => x - b);
  newArray = [...new Set(newArray)]; [1,2,3,5,6,7,8,9,10,11]

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== b) {
      return b;
    }
    b++;
  }

  if (newArray[newArray.length - 1] <= 0) {
    return 1;
  }

  return newArray[newArray.length - 1] + 1;
};

const num = positiveNumber([1, 3, 6, 4, 1, 2]);

console.log(num);