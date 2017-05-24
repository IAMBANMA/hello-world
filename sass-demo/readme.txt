SASS文件就是普通的文本文件，里面可以直接使用CSS语法。文件后缀名是.scss，意思为Sassy CSS。
下面的命令，可以在屏幕上显示.scss文件转化的css代码。（假设文件名为test。）
　　sass test.scss
如果要将显示结果保存成文件，后面再跟一个.css文件名。
　　sass test.scss test.css
SASS提供四个编译风格的选项：
　　* nested：嵌套缩进的css代码，它是默认值。
　　* expanded：没有缩进的、扩展的css代码。
　　* compact：简洁格式的css代码。
　　* compressed：压缩后的css代码。
生产环境当中，一般使用最后一个选项。
　　sass --style compressed test.sass test.css
你也可以让SASS监听某个文件或目录，一旦源文件有变动，就自动生成编译后的版本。
　　// watch a file
　　sass --watch input.scss:output.css
　　// watch a directory
　　sass --watch app/sass:public/stylesheets

***命令行输入sass -h可以查看可用的命令命令参数!!

sass --watch input.scss:output.css//这条命令用于监听文件的变化然后自动编译!
