'use strict'



const arg1 = ()=> {
  let answer = parseInt(process.argv[2])
  console.log(answer);
  if(typeof(answer) === NaN) {
    console.log("first input must be a number");
  }
  return answer;
}

const arg2 = ()=>{
  let answer = process.argv[3]
  return answer;
}

const arg3 = ()=>{
  let answer = process.argv[4]
  return answer;
}

const arg4 = [arg1, arg2, arg3]

module.exports = { arg1, arg2, arg3, arg4 }
