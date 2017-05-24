'use strict'
const assert=require('assert');
const sum=require('../hello');

describe('#hello.js',()=>{
  describe('#sum()',()=>{
    before(()=>{console.log('before: ')});
    after(()=>{console.log('after.')});
    beforeEach(()=>{console.log('beforeEach:')});
    afterEach(()=>{console.log('  afterEach.')});
    it('sum() should return 0',()=>{
      assert.strictEqual(sum(),0);
    });
    
    it('sum(1,2,3) should return 6',()=>{
      assert.strictEqual(sum(1,2,3),6);
    });
  });

});










