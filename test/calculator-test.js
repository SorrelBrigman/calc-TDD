'use strict'

const {assert : {isNumber, equal} } = require('chai');
const calculator = require('../lib/calculator.js');

describe('calculator', ()=>{
  it('should return a number', ()=>{
    isNumber(calculator());
  });
  it('should add if it receives + as the second argument', () =>{
    equal(calculator(1, "+", 2), (1+2))
  });
  it('should subtract if it receives - as the second argument', () =>{
    equal(calculator(1, "-", 2), (1-2))
  });
  it('should divide if it receives / as the second argument', ()=>{
    equal(calculator(1, "/", 2), (1/2))
  });
  it('should multiple if it receives * as the second argument', ()=>{
    equal(calculator(1, "*", 2), (1*2));
  })
})
