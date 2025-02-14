"use strict";

const arr = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
];

let obj = {};
function arrayToObject(arr) {
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].id] = arr[i];
  }
  return obj;
}

console.log(arrayToObject(arr));
