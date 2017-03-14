'use strict'

const {assert: {isNumber, isNotNumber, isArray, equal} } = require('chai');

const parseArgs = require('../lib/parse-args.js');

describe('parseArgs', ()=>{
  describe('first argument', ()=>{
    it('should return a number', ()=>{
      isNumber(parseArgs.arg1());
    });
    it('should equate to the first arguement in the terminal', ()=>{
      equal(parseArgs.arg1(), process.argv[2]);
    })
  })
  describe('second argument', () =>{
    it('should not return a number', () =>{
      isNotNumber(parseArgs.arg2());
    });
    it('should equate to the second arguement in the terminal', ()=>{
      equal(parseArgs.arg2(), process.argv[3]);
    })
  })
  describe('third argument', ()=>{
    it('should return a number', ()=>{
      isNumber(parseArgs.arg3());
    })
    it('should equate to the third arguement in the terminal', ()=>{
      equal(parseArgs.arg3(), process.argv[4]);
    })
  })
  it('should return the arguments as an array', ()=>{
    isArray(parseArgs.arg4)
  })
});
