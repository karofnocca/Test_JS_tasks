"use strict";

const obj = { a: 1, b: 2, c: 3 };
console.log(swapProperties(obj, "a", "b"));
// {a: 2, b: 1, c: 3}
let char1 = "a";
let char2 = "b";

function swapProperties(obj, char1, char2) {
  let temp = obj[char1];
  obj[char1] = obj[char2];
  obj[char2] = temp;
  return obj;
}
