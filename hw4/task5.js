"use strict";

const students = {
  num1: 5,
  num2: 10,
  operator: "+",
  result() {
    let res;
    switch (this.operator) {
      case "+":
        res = this.num1 + this.num2;
        break;
      case "-":
        res = this.num1 - this.num2;
        break;
      case "*":
        res = this.num1 * this.num2;
        break;
      case "/":
        res = this.num1 / this.num2;
        break;
    }
    console.log(`${res}`);
  },
};

students.result();
