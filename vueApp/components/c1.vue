<template>
    <div id='content'>
        <h2>AJAX基础知识点</h2>
    <p>总结一下JavaScript的ajax. 定义:AJAX=asynchronous javascript and XML(异步的javascript和XML) AJAX不是新的编程语言,而是一种使用现有标准的新方法.实现:在不重新加载整个页面的情况下,与服务器交换数据并更新局部网页.
        <br>
        <br>••工作原理:浏览器[1,发生某个事件...2,常见XMLHttpRequest对象;3,发送HttpRequest]-->internet-->服务器[1,处理HttpRequest;2,创建响应并将数据返回浏览器]-->Internet-->浏览器[1,使用js处理被返回的数据;2,更新页面内容]
        <br>
        <br>••创建XMLHttpRequest对象 兼容现代浏览器及老式IE的做法是: var xmlhttp; if(window.XMLHttpRequest) { xmlhttp=new XMLHttpRequest(); //支持现代浏览器 }else{ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); //支持IE5/6 }
        <br>
        <br>••发送请求 我们需要用到XMLHttpRequest对象的open()和send()方法: 用法:xmlhttp.open(method,url,async);解释:method是指请求类型GET或POST;url:文件在服务器上的位置;async:true(异步)或false(同步) xmlhttp.send(string);解释:string:仅用于POST请求. **使用GET请求的注意点:1,为了避免得到的是缓存结果,需要向URL添加一个唯一的ID,比如:xmlhttp.open("GET",".....?="+Math.random(),true) 2;可以通过向URL添加信息发送出去;比如xmlhttp.open("GET","....?q=lala&Q=haha",true) **使用POST方法的注意点:1,如果想POST数据,需要使用setRequestHeader()来添加HTTP头,然后在send()方法中添加希望发送的数据.(setRequestHeader(header,value)的使用:header:规定头名称,如Content-type;value:规定头值,比如:application/x-www-form-urlencoded);怎样在send()中添加数据?比如xmlhttp.send("fname=majun&lname=manni");
        <br>
        <br>••async取值不同的区别 **async是true时;异步AJAX请求,可以在等待服务器响应的时候执行其他脚本,当响应就绪后再对响应进行处理,处理函数是onreadystatechange事件. 例如:xmlhttp.onreadystatechange=function{ if(xmlhttp.readyState==4&&xmlhttp.status==200) {document.getElementById("mydiv").innerHTML=xmlhttp.responseText; } } xmlhttp.open(.....); xmlhttp.send(); **一般不推荐使用false,当使用false时,就不需要编写onreadystatechange事件函数,只需要将处理代码写在send()语句后即可; 例如:xmlhttp.open(.....);xmlhttp.send();document.getElementById("mydiv").innerHTML=xmlhttp.responseText;
        <br>
        <br>••如需获得来时服务器的响应,请使用XMLHttpRequest对象的responseText或responseXML属性.
        <br>
        <br>••AJAX的onreadystatechange事件; readystate属性:储存着XMLHttpRequest的状态,它的值有5个,是从0到4;0:代表请求未初始化;1:代表服务器连接已将建立;2:代表请求已经接受;3:代表请求处理中;4:代表处理完成,且响应已经就绪. status属性:取值200 ok;取值404,未找到页面 onreadystatechange事件会基于readystate值的改变触发,所以在readystate从0到4变化时,onreadystatechange事件被触发了5次.
        <br>
        <br>••当页面有多个XHR的时候,代码量会增大,需要适当优化,相同的代码重复使用,考虑使用带参数的回调函数方法解决.</p>

    </div>
</template>

<style>
    #content{
        position:absolute;
        top:50px;
        left:200px;
        background-color:tomato;
    }
</style>


   