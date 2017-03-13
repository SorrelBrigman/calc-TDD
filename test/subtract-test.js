'use stict'

const {assert : {isNumber, equal}} = require('chai');
const sub = require('../lib/subtract.js');

describe('subtract', ()=>{
  it('should return a number', ()=>{
    isNumber(sub())
  });
  it('should subtract the two numbers it is given', ()=>{
    equal(sub(3,4), (3-4));
  })
});
