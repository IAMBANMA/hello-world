const app=require('../app');
const request=require('supertest');

it('#test GET /',async ()=>{
  let res=await request(app.listen(9000)).get('/').expect('Content-Type',/text\/html/)
});

