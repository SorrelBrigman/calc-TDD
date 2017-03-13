'use strict'

const {assert: {isNumber}} = require('chai');

const add = require('../lib/add.js');

describe('add', ()=>{
  it('should return a number', ()=>{
    isNumber(add());
  })
})
