'use strict'

const {assert : {isNumber, equal} } = require('chai');

const multiple = require('../lib/multiple.js');

describe('multiple', ()=>{
  it('should return a number', ()=>{
    isNumber(multiple());
  });
  it('should multiple two numbers', ()=>{
    equal(multiple(3,4), (3*4));
  });
})
