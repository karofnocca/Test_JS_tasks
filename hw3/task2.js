//#2

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

function mergeArrays(arr1, arr2) {
  let resultArr = arr1.concat(arr2);
  let uniqArr = [...new Set(resultArr)];
  return uniqArr;
}

console.log(mergeArrays(arr1, arr2));
