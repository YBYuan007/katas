const find_mistake = function (nums) {
  // find duplicate number and the missing number, add up 
  nums.sort(); 
  let dup = null; 
  let missing = null; 
  let newList = [];
  for (let i = 0 ; i < nums.length ; i ++) {
    // console.log(nums);
    if (nums[i] === nums[i+1]) {
      dup = nums[i]
      // console.log('dup: ', dup);
      newList  = nums.slice(0,i).concat(nums.slice(i+1)); 
      // console.log("newList is: ", newList); 
    }} 
  for (let j = 0 ; j < newList.length ; j ++) {
    if (newList[j] !== (j+1)) {
      missing = j+1; 
      // console.log('missing: ', missing);
      break;
    }
  }
  return dup + missing ;   
}
// [1,1,3]
// [1,3,3]


console.log(find_mistake([4,3,3,1])); // 5
console.log(find_mistake([1,1,3,4])); // 3
console.log(find_mistake([2,2]));  //3 
console.log(find_mistake([4,3,3,1])); // 5 
console.log(find_mistake([6,3,2,4,3,1])); // 8 
console.log(find_mistake([10,2,3,4,5,6,7,8,9,10])); //11 




