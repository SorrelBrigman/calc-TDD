'use strict'



const arg1 = ()=> {
  return 1;
}

const arg2 = ()=>{
  return '+';
}

const arg3 = ()=>{
  return 1;
}

const arg4 = [arg1, arg2, arg3]

module.exports = { arg1, arg2, arg3, arg4 }
