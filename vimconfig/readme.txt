终端输入vimtutor会有中文的vim基本使用教程.
vim的配置:
全局的配置文件是/usr/share/vim/vimrc,但是不能修改
用户的配置文件在~/下,可能不存在,我们可以自己创建,文件名是.vimrc.
但是直接创建编辑配置信息可能还是不行,最好先在一个普通文件(比如temp.txt)文件中编写好配置,然后再通过
复制命令来创建:cp temp.txt .vimrc
以上在~/下进行.
