var expect=chai.expect;

describe('乘法函数测试',function(){
  it('9乘以9归一',function(){
    expect(add(9,9)).to.be.equal(81);
  });
  it('归零',function(){
    expect(add(9,0)).to.be.equal(0);
  })
})
