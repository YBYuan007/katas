const solution = function (matrix, queries) {
  console.log("coming");
  const blackCells = [];
  const whiteCells = [];

  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix[a].length; b++) {
      if ((a % 2 === 0 && b % 2 === 1) || (a % 2 === 1 && b % 2 === 0)) {
        blackCells.push(matrix[a][b]);
        // console.log("black coming", matrix[a][b]);
      } else {
        whiteCells.push(matrix[a][b]);
        // console.log("white coming", matrix[a][b]);
      }
    }
  }
  console.log(" round 1 blackcells", blackCells);
  console.log(" round 1 whitecells", whiteCells);

  // you need to put them in order 

  for (let x = 0; x < queries.length; x ++) {
    num1 = blackCells[queries[x][0]]; 
    num2 = whiteCells[queries[x][1]]; 
    console.log("black to change", num1, "white to change", num2); 

    avg = (num1+num2)/2 ; 
    console.log("average is", avg);

    if (Number.isInteger(avg)) {
      blackCells[queries[x][0]] = avg ; 
      whiteCells[queries[x][1]] = avg; 
    } else {
      if (num1 > num2 ) {
      blackCells[queries[x][0]] = Math.ceil(avg) ; 
      whiteCells[queries[x][1]] = Math.floor(avg)  }
      else {
      blackCells[queries[x][0]] = Math.floor(avg) ; 
      whiteCells[queries[x][1]] = Math.ceil(avg)  }
      }

      console.log("blackcells", queries[x] , blackCells);
      console.log("white cells", queries[x], whiteCells);
    } 

    
  
};

console.log(
  solution(
    [
      [2, 0, 4],
      [2, 8, 5],
      [6, 0, 9],
      [2, 7, 10],
      [4, 3, 4],
    ],
    [
      [0, 0],
      [1, 3],
    ]
  )
);

// console.log(
//   solution(
//     [
//       [1, 9, 10, 8],
//       [3, 4, 4, 4],
//     ],
//     [
//       [2, 3],
//       [3, 2],
//     ]
//   )
// );
