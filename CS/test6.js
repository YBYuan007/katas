const nearest_power_of_two = function (n) {
  let x = 0 ; 
  while (Math.pow(2,x) <= n) {
    // console.log(x, Math.pow(2,x));
    x++; 
  }
  return Math.pow(2,x-1); 
} 

// console.log( nearest_power_of_two(5));
// console.log( nearest_power_of_two(10));
// console.log( nearest_power_of_two(2)); 
// console.log( nearest_power_of_two(100)); 

