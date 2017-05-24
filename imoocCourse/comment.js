var http=require('http');
var querystring=require('querystring');
var postData=querystring.stringify({
'content':'这是测试的评论',
'mid':8837
});
var options={
hostname:'www.imooc.com',
port:80,
path:'/course/docomment',
method:'POST',
headers:{
'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
'Cache-Control':'no-cache',
'Connection':'keep-alive',
'Content-Length':postData.length,
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'imooc_uuid=88032f35-f1a7-4eb6-ad2f-7e7bc9da2797; imooc_isnew_ct=1465227558; PHPSESSID=ueb3fnfgm62npiuk15dmm2imt6; loginstate=1; apsid=M4ZjQzZTI0ZmMzNjZkNTFkNDJlODMwYTRlZjZmZjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjc0ODU2NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4NDA3OTg1OTFAcXEuY29tAAAAAAAAAAAAAAAAAAAAADk0NTRhYTJiMGI5ZjQyNzUwYzYwYzhjNjJlODIzZTNjnlvVWJ5b1Vg%3DYW; last_login_username=840798591%40qq.com; a0603_times=1; IMCDNS=0; Hm_lvt_f5a9b0c9b75034305dd9abf0bb503cf0=1490503808; Hm_lpvt_f5a9b0c9b75034305dd9abf0bb503cf0=1490554367; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1490377312; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1490567500; imooc_isnew=2; cvde=58d55a431045f-567',
'Host':'www.imooc.com',
'Origin':'http://www.imooc.com',
'Pragma':'no-cache',
'Referer':'http://www.imooc.com/video/8837',
'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
'X-Requested-With':'XMLHttpRequest'
}
}
var req=http.request(options);
req.on('error',function(){
console.log('cucuola!')
});
req.write(postData);
req.end();




