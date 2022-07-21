function twoSum(nums, target) {
  let items = {};
  for (let i = 1; i < nums.length; i++) {
    items[nums[i]] = { index: i };
  }
  for (let i = 0; i < nums.length/2; i++) {
    if (items[target - nums[i]] ) {
      return [i, items[target - nums[i]].index];
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
