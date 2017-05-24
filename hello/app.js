var http=require('http');
var fs=require('fs');
var index;
fs.readFile('index.html','utf-8',function(err,data){
index=data;
});
var server=http.createServer(function(req,res){
if(req.url.endsWith('.min.css')){
res.body=fs.readFileSync('./bower_components/bootstrap/dist/css/bootstrap.min.css');
}

res.write(index);

}).listen(3000);
console.log('server is running...')
