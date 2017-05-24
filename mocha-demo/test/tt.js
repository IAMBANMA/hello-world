var assert=require('assert');

describe('异步测试',function(){
  it('测试应该在5000毫秒后结束',function(done){
    var x=true;
	var f=function(){
	  assert(x);
	  done();
	};
	setTimeout(f,4000);
  })
})
