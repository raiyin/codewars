const search = (nums, k) => {
    const mySet = new Set();
    const len = nums.length;
    for (let index = 0; index < len; index++) {
        if (mySet.has(nums[index])) {
            return true;
        }
        else {
            mySet.add(k - nums[index]);
        }
    }
    return false;
};

console.log(search([10, 13, 8, 4, 4, 15, 1, 9], 19));
