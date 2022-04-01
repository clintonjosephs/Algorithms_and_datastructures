function getOccurrence(array, value) {
    var indices = [];
    array.forEach((v, index) => (v === value && indices.push(index)));
    return indices;
}


var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const count = getOccurrence(nums, nums[i]);
        if (count.length > 1) {
            for (let b = 1; b < count.length; b++) {
                nums.splice(count[b], 1);
            }
        }
    }
    return nums;
};

console.log(removeDuplicates([1,1,1,2]));