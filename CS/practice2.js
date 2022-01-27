const solution = function (s, t) {
  let count = 0;
  console.log("coming.......");
  // go through s... delete the number one at a time and compare with t. ('<')
  for (let ss = 0; ss < s.length; ss++) {
    if (parseInt(s[ss]) && ss === 0) {
      // if it is an integer, then delete, create new word ... then compare
      let newWord = s.slice(1);
      if (newWord < t) {
        count++;
        console.log("situtation 1", count, newWord, t);
      }
    } else if (parseInt(s[ss]) && ss === s.length - 1) {
      let newWord = s.slice(0, s.length - 1);
      if (newWord < t) {
        count++;
        console.log("situtation 2", count, newWord, t);
      }
    } else if (parseInt(s[ss]) && 0 < ss < s.length - 1) {
      let newWord = s.slice(0, ss) + s.slice(ss + 1);
      if (newWord < t) {
        count++;
        console.log("situtation 3", count, newWord, t);
      }
    }
  }
  // go through t.... delete the number one at a time and compare with s. ('>')
  for (let tt = 0; tt < t.length; tt++) {
    if (parseInt(t[tt]) && tt === 0) {
      // if it is an integer, then delete, create new word ... then compare
      let newWord = t.slice(1);
      if (newWord > s) {
        count++;
        console.log("situtation 4", count, newWord, s);
      }
    } else if (parseInt(t[tt]) && tt === t.length - 1) {
      let newWord = t.slice(0, t.length - 1);
      if (newWord > s) {
        count++;
        console.log("situtation 5", count, newWord, s);
      }
    } else if (parseInt(t[tt]) && 0 < tt < t.length - 1) {
      let newWord = t.slice(0, tt) + t.slice(tt + 1);
      if (newWord > s) {
        count++;
        console.log("situtation 6", count, newWord, s);
      }
    }
  }
  return count;
};

console.log("first one", solution("ab12c", "1zz456"));
console.log("second one", solution("ab12c", "ab24z"));
