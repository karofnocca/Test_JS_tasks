"use strict";

let myTask = { a: 5, b: 3, c: 10, d: 1 };
let num = 5;

function filterObject(obj, num) {
  for (let key in obj) {
    if (myTask[key] < num) {
      delete myTask[key];
    }
  }
  return myTask;
}

console.log(filterObject(myTask, num));
