'use strict'

const { arg1, arg2, arg3 } = require('./parse-args.js');
const calc = require('./calculator.js')(arg1(), arg2(), arg3());

console.log(arg1)

console.log(calc);
