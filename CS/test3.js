const func = function (operations) {
  let result = "";
  let resultOrder = [];
  let clipboard = "";

  for (let i = 0; i < operations.length; i++) {
    let keyWord = operations[i].split(" ")[0];
    let spaceIndex = operations[i].indexOf(" ");

    // console.log(i, keyWord, spaceIndex);
    switch (keyWord) {
      case "INSERT":
        let remainingWord = operations[i].substring(
          spaceIndex + 1,
          spaceIndex + 21
        );
        result = result + remainingWord;
        resultOrder.push(result);
        // console.log(i, keyWord, result, resultOrder);
        break;

      case "DELETE":
        result = result.substring(0, result.length - 1);
        resultOrder.push(result);
        // console.log(i, keyWord, result, resultOrder);
        break;

      case "COPY":
        //copy the substring of the current text starting from <index> and spanning until the end (if <index> is out of bounds copies an empty string),
        // i.e. sets the clipboard value equal to the given substring
        const ind = operations[i].split(" ")[1];
        // console.log("within copy", ind);
        if (ind) {
          clipboard = result.substring(ind);
        } else {
          clipboard = "";
        }
        // resultOrder = resultOrder.push(result);
        // console.log(i, keyWord, result, resultOrder, clipboard);
        break;

      case "PASTE":
        if (clipboard.length > 0) {
          result = result + clipboard;
          resultOrder.push(result);
        }
        // console.log(i, keyWord, result, resultOrder, clipboard);
        break;

      case "UNDO":
        if (resultOrder.length > 0) {
          result = resultOrder[resultOrder.length - 2];
          if (result === undefined) {
            result = "";
          }
        }
        resultOrder.pop();
        // console.log(i, keyWord, result, resultOrder, clipboard);
        break;
    }
  }
  return result;
};

// operations = ["INSERT Code", "INSERT Signal", "DELETE", "UNDO"];
// operations = [
//   "INSERT Da",
//   "COPY 0",
//   "UNDO",
//   "PASTE",
//   "PASTE",
//   "COPY 2",
//   "PASTE",
//   "PASTE",
//   "DELETE",
//   "INSERT aaam",
// ];

operations = [
  "INSERT Nothing",
  "INSERT is",
  "INSERT Permanent",
  "UNDO",
  "UNDO",
  "UNDO",
];
console.log(func(operations));
