//#3

let arr3 = ["apple", "banana", "kiwi"];
let minLength = 5;
let result = [];

function filterStrings(arr, minLength) {
  for (let i = 0; i < arr.length; i++) {
    if (arr3[i].length >= minLength) {
      result.push(arr3[i]);
    }
  }
  return result;
}

console.log(filterStrings(arr3, minLength));
