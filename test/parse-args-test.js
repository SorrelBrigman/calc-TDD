'use strict'

const {assert: {isNumber, isNotNumber, isArray} } = require('chai');

const parseArgs = require('../lib/parse-args.js');

describe('parseArgs', ()=>{
  describe('first argument', ()=>{
    it('should return a number', ()=>{
      isNumber(parseArgs.arg1());
    })
  })
  describe('second argument', () =>{
    it('should not return a number', () =>{
      isNotNumber(parseArgs.arg2());
    })
  })
  describe('third argument', ()=>{
    it('should return a number', ()=>{
      isNumber(parseArgs.arg3());
    })
  })
  it('should return the arguments as an array', ()=>{
    isArray(parseArgs.arg4)
  })
});
