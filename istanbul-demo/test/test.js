var assert=require('assert');
var my=require('../sqrt.js');
var chai=require('chai');
var expect=chai.expect;

describe('sqrt',function(){
  it('4的平方根是2',function(){
    assert.strictEqual(my.sqrt(4),2);
  });
  it('参数为负数时报错',function(){
  assert.throws(function(){if(!my.sqrt(-4))throw new Error('负数没有平方根!')},Error);
  });
  
 
})
