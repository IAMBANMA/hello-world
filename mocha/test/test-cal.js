const cal=require('../calculate');
const assert=require('assert');

it('#calculate.js',async ()=>{
  let r=await cal();
  assert.strictEqual(r,108);
});




