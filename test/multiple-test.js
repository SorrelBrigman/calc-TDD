'use strict'

const {assert : {isNumber} } = require('chai');

const multiple = require('../lib/multiple.js');

describe('multiple', ()=>{
  it('should return a number', ()=>{
    isNumber(multiple());
  })
})
