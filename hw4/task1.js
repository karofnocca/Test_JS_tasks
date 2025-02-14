"use strict";

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

function mergeObjects(obj1, obj2) {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}

console.log(mergeObjects(obj1, obj2));
