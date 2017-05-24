'use strict'
const fs=require('fs');
async () => {
let exp=await fs.readFile('./data.txt','utf-8');
let fn=new Function('return'+exp);
let r=fn();
console.log(r);
}

