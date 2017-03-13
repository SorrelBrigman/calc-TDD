'use stict'

const {assert : {isNumber}} = require('chai');
const sub = require('../lib/subtract.js');

describe('subtract', ()=>{
  it('should return a number', ()=>{
    isNumber(sub())
  })
});
