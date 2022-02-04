const func = function solution(n, operations) {
  let init = "0".repeat(n);
  console.log(init);

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === "L") {
      console.log("L condition" )
      for (let j = 0; j < init.length; j++) {
        if (init[j] === "0") {
          init = init.slice(0, j) + "1" + init.slice(j + 1);
          console.log("i is:", i, "j is: ", j, "init is: ", init);
          break;
        }
      }
    } else {
      console.log("C condition" ); 
      let ind = operations[i][1];
      console.log("index is: ", ind); 
      if (init[ind] !== "0" ) {
        console.log("here");
        init = init.slice(0, ind) + "0" + init.slice(ind + 1);
      } 


      // init = init.slice(0,ind).concat("0".toString(), init.slice(ind + 1).toString());
       // init = init.slice(0, ind) + "0" + init.slice(ind + 1);
      console.log("i is:", i, "ind is: ", ind, "init is: ", init);
    }
  }
  return init;
};

n = 10;
operations = ["L", "L", "C0", "L", "C3"];
console.log(func(n, operations));

n = 2;
operations = ["L", "L", "L", "C1"];
console.log(func(n, operations));
