//#4

let arr4 = ["apple", "banana", "kiwi"];
let obj = {};
function arrayToObject(arr4) {
  for (let i = 0; i < arr4.length; i++) {
    obj[arr4[i]] = arr4[i].length;
  }
  return obj;
}

console.log(arrayToObject(arr4));
