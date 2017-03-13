'use strict'

const {assert : {isNumber, equal} } = require('chai');
const divide = require('../lib/divide.js');

describe('divide', ()=>{
  it('should return a number', ()=>{
    isNumber(divide());
  });
  it('should divide the two numbers it receives', ()=>{
    equal(divide(3,4), (3/4));
  })
})
