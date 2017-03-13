'use strict'

const {assert : {isNumber} } = require('chai');
const calculator = require('../lib/calculator.js');

describe('calculator', ()=>{
  it('should return a number', ()=>{
    isNumber(calculator());
  })
})
