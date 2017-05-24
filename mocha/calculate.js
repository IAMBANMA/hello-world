const fs=require('mz/fs');
module.exports=async()=>{
  let exp=await fs.readFile('./text.txt','utf-8');
  let fn=new Function('return'+exp);
  let r=fn();
  console.log(`calculate:${exp}=${r}`);
  return r;
}
