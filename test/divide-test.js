'use strict'

const {assert : {isNumber} } = require('chai');
const divide = require('../lib/divide.js');

describe('divide', ()=>{
  it('should return a number', ()=>{
    isNumber(divide());
  })
})
