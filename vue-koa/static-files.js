const fs = require('mz/fs');
const mime = require('mime');

module.exports = async(ctx, next) => {
    if (ctx.path == '/') {
        ctx.type = 'text/html';
        ctx.body = await fs.readFile(__dirname + '/static/index.html');
    } else {
        var path = __dirname + '/static' + ctx.path;
        //console.log(path);
        ctx.type = mime.lookup(ctx.path);
        ctx.body = await fs.readFile(path);//此处读取文件时第二个参数指定了编码格式utf-8,结果读取的字体文件就异常啦.
    }

    next();

}
//字体静态文件未成功加载?原因是?.....
//但是当我使用fis3自动发布时,人家是可以显示的,说明我这里的还是有问题.有可能是程序字体文件处理有问题.
//(这个问题已经解决,ctx.type=mime.lookup(ctx.path)指定文件类型的问题.现在已经ok!)
