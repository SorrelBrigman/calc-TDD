'use strict'

const {assert: {isNumber, equal}} = require('chai');

const add = require('../lib/add.js');

describe('add', ()=>{
  it('should return a number', ()=>{
    isNumber(add());
  });
  it('should add two numbers', ()=>{
    equal(add(3,4), (3 + 4));
  })
})
