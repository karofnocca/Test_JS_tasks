"use strict";

//#1
let name = ["John", "Doe"];

function generateUsername(name) {
  return name.join("_");
}

console.log(generateUsername(name));
