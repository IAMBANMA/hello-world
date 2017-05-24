var add=require('../app');
var assert=require('assert')

describe('加法函数的测试',function(){
   
	it('1加1应该等于2',function(){
    assert.strictEqual(add(1,1),2);
  });
});
