'use strict'

const add = require('./add.js');
const sub = require('./subtract.js');
const divide = require('./divide.js');
const multiple = require('./multiple.js');

module.exports = (a,b,c)=>{
  let answer;
  let a1 = parseFloat(a);
  let c1 = parseFloat(c);
  if(b === "+") {
    answer = add(a1,c1);
  }
  if(b === "-") {
    answer = sub(a1,c1);
  }
  if(b === "/") {
    answer = divide(a1,c1);
  }
  if(b === "x") {
    answer = multiple(a1,c1);
  }
  answer = parseFloat(answer);
  return answer;
}
